import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_layout">
          <div className="footer_grid_left">
            <a href="https://discord.com/" className="footer_logo_link">
              <img 
                src="/images/Symbol.svg"
                loading="lazy" 
                alt="Home page" 
              />
            </a>
            <div className="p-footer margin_bottom_16px">언어</div>
            <div className="left_dropdown">
              <div className="dropdown_language_btn">
                <div className="dropdown_language_name">
                  한국어
                </div>
                <img 
                  src="/images/Chevron_Down.svg"
                  loading="lazy" 
                  alt="" 
                  className="dropdown_language_arrow" 
                />
              </div>
            </div>
            <div className="social_wrapper">
              <div className="p-footer">소셜</div>
              <div className="social_flex">
                <a href="https://twitter.com/discord" target="_blank" rel="noopener noreferrer" className="link_s">
                  <img
                    src="/images/x.svg"
                    loading="lazy" 
                    alt="Twitter" 
                    className="image" 
                  />
                </a>
                <a href="https://www.instagram.com/discord/" target="_blank" rel="noopener noreferrer" className="link_s">
                  <img
                    src="/images/instagram.svg"
                    loading="lazy" 
                    alt="Instagram" 
                    className="image" 
                  />
                </a>
                <a href="https://www.facebook.com/discord/" target="_blank" rel="noopener noreferrer" className="link_s">
                  <img
                    src="/images/facebook.svg"
                    loading="lazy" 
                    alt="Facebook" 
                    className="image" 
                  />
                </a>
                <a href="https://www.youtube.com/discord" target="_blank" rel="noopener noreferrer" className="link_s">
                  <img
                    src="/images/youtube.svg"
                    loading="lazy" 
                    alt="Youtube" 
                    className="image" 
                  />
                </a>
                <a href="https://www.tiktok.com/@discord" target="_blank" rel="noopener noreferrer" className="link_s">
                  <img
                    src="/images/tiktok.svg"
                    loading="lazy" 
                    alt="Tiktok" 
                    className="image" 
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Footer grid sections */}
          <div className="footer_grid product">
            <div className="dropdown_footer w_dropdown">
              <div className="dropdown_toggle_footer">
                <div>제품</div>
              </div>
              <nav className="dropdown_list-footer">
                <div className="padding_16px display_none"></div>
                <a href="https://discord.com/download" className="link_footer top_new_link">다운로드</a>
                <a href="https://discord.com/nitro" className="link_footer top_new_link">Nitro</a>
                <a href="https://discordstatus.com/" className="link_footer top_new_link">상태</a>
                <a href="https://discord.com/application-directory" className="link_footer top_new_link">앱 디렉터리</a>
              </nav>
            </div>
          </div>

          <div className="footer_grid company">
            <div className="dropdown_footer w_dropdown">
              <div className="dropdown_toggle_footer">
                <div>회사</div>
              </div>
              <nav className="dropdown_list_footer w_dropdown_list">
                <div className="padding_16px display_none"></div>
                <a href="/company" className="link_footer top_new_link">소개</a>
                <a href="/careers" className="link_footer top_new_link">채용</a>
                <a href="/branding" className="link_footer top_new_link">브랜드</a>
                <a href="/newsroom" className="link_footer top_new_link">뉴스</a>
              </nav>
            </div>
          </div>

          <div className="footer_grid resource">
            <div className="dropdown_footer w-dropdown">
              <div className="dropdown_toggle_footer">
                <div>리소스</div>
              </div>
              <nav className="dropdown_list_footer w_dropdown_list">
                <div className="padding_16px display_none"></div>
                <a href="https://discord.com/college" className="link_footer top_new_link">대학</a>
                <a href="https://support.discord.com/hc" className="link_footer top_new_link">지원</a>
                <a href="https://discord.com/safety" className="link_footer top_new_link">보안센터</a>
                <a href="https://discord.com/blog" className="link_footer top_new_link">블로그</a>
                <a href="https://discord.com/streamkit" className="link_footer top_new_link">StreamKit</a>
                <a href="https://discord.com/creators" className="link_footer top_new_link">제작자</a>
                <a href="https://discord.com/community" className="link_footer top_new_link">커뮤니티</a>
                <a href="https://discord.com/developers" className="link_footer top_new_link">개발자</a>
                <a href="https://discord.com/quests" className="link_footer top_new_link">퀘스트</a>
                <a href="https://discordmerch.com/evergreenfooter" target="_blank" rel="noopener noreferrer" className="link_footer top_new_link">공식 서드 파티 굿즈</a>
                <a href="https://support.discord.com/hc/en-us/community/topics" className="link_footer top_new_link">피드백</a>
              </nav>
            </div>
          </div>

          <div className="footer_grid policy">
            <div className="dropdown_footer line-none w-dropdown">
              <div className="dropdown_toggle_footer">
                <div>정책</div>
              </div>
              <nav className="dropdown_list_footer w_dropdown_list">
                <div className="padding_16px display_none"></div>
                <a href="/terms" className="link_footer top_new_link">이용 약관</a>
                <a href="/privacy" className="link_footer top_new_link">개인정보 보호정책</a>
                <a href="#" className="link_footer top_new_link">쿠키 설정</a>
                <a href="/guidelines" className="link_footer top_new_link">지침</a>
                <a href="https://discord.com/acknowledgements" className="link_footer top_new_link">감사</a>
                <a href="https://discord.com/licenses" className="link_footer top_new_link">라이선스</a>
                <a href="https://discord.com/company-information" className="link_footer top_new_link">회사 정보</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_img">
        <img 
          src="/images/Wordmark.svg"
          loading="lazy" 
          aria-label="Discord" 
          alt="Discord" 
          className="word" 
        />
      </div>
    </footer>
  );
}

export default Footer;