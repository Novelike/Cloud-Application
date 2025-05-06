import fs from 'fs/promises';
import cheerio from 'cheerio';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';
import fetch from 'node-fetch';

// Helper: Convert class names to snake_case
function toSnakeCase(name) {
  return name.replace(/[-]+/g, '_');
}

async function generateClone() {
  // 1. Read and transform HTML
  const html = await fs.readFile('Discord_Origin.html', 'utf8');
  const $ = cheerio.load(html, { decodeEntities: false });
  $('[class]').each((_, el) => {1
    const oldClasses = ($(el).attr('class') || '').split(/\s+/);
    const newClasses = oldClasses.map(toSnakeCase).join(' ');
    $(el).attr('class', newClasses);
  });
  await fs.writeFile('discord_clone.html', $.html(), 'utf8');
  console.log('✅ discord_clone.html 생성 완료');

  // 2. Fetch and transform CSS
  const cssUrl = 'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/css/discord-2022.shared.c27560660.min.css';
  const response = await fetch(cssUrl);
  const cssText = await response.text();

  // PostCSS plugin to rename classes in selectors
  const renamePlugin = () => {
    return {
      postcssPlugin: 'rename-classes',
      Rule(rule) {
        rule.selector = selectorParser(selectors => {
          selectors.walkClasses(node => {
            node.value = toSnakeCase(node.value);
          });
        }).processSync(rule.selector);
      }
    };
  };
  renamePlugin.postcss = true;

  const result = await postcss([renamePlugin]).process(cssText, { from: undefined });
  await fs.writeFile('discord_clone.css', result.css, 'utf8');
  console.log('✅ discord_clone.css 생성 완료');
}

generateClone().catch(console.error);
