import React from 'react';

function LinkList({ 
  title, 
  links = [], 
  className = "" 
}) {
  return (
    <div className={`nav_dd_link_list ${className}`}>
      {title && <div className="nav_dd_link_title">{title}</div>}
      
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.href} 
          className={`dd_nav-link ${link.isBlock ? 'w-inline-block' : ''}`} 
          tabIndex="0"
        >
          {link.hasArrow ? (
            <>
              <div>{link.text}</div>
              <div className="nav_dd_link_arrow w-embed">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4H12M12 4V11M12 4L4 12" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </>
          ) : (
            link.text
          )}
        </a>
      ))}
    </div>
  );
}

export default LinkList;