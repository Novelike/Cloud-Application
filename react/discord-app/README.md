# Discord React App

- Discord Clone 홈페이지를 React 기반으로 마이그레이션 한 웹 애플리케이션이다. 
- 헤더, 메인, 푸터를 포함한 모든 섹션과 스타일링을 기존 클론 페이지와 동일하게 구현했다.

# Discord React App 프로젝트 트리 구조

```
discord-app/
│
├── 📁 public/
│   ├── 📁 fonts/
│   │   └── ABCGintoDiscord-Regular.woff2
│   │
│   ├── 📁 images/
│   │   ├── Background.png
│   │   ├── Box.webp
│   │   ├── CHARACTERS_FULL.webp
│   │   ├── Chevron_Down.svg
│   │   ├── Clyde_Cube.webp, Clyde-Cube.webp, Clyde.webp
│   │   ├── Discord_Nelly_Pose2_Flying_1.webp
│   │   ├── Discrod_MainLogo.svg
│   │   ├── Egg.webp
│   │   ├── F-bg.png, F-c.png, F-card-3.png
│   │   ├── FEAT-C.png
│   │   ├── Featur-card.png, Feature-card.png
│   │   ├── Footer.webp
│   │   ├── icon.svg, Symbol.svg, Wordmark.svg
│   │   ├── 소셜 미디어 아이콘: facebook.svg, instagram.svg, tiktok.svg, x.svg, youtube.svg
│   │   ├── main_bg.png
│   │   ├── Men.webp
│   │   ├── party_wumpus.gif
│   │   ├── Set_1_15.webp, Set_2_4.webp, Set_3_3.webp, Set_3_4.webp
│   │   ├── Texture_2.webp, Texture_7.webp, Texture_Headline.webp
│   │   ├── woman-bottom-p-500.webp, woman-bottom-p-800.webp, woman-bottom.webp
│   │   ├── woman-top-p-500.webp, woman-top-p-800.webp, woman-top.webp
│   │   └── Wumpus_copy.webp, Wumpus.webp
│   │
│   ├── 📁 videos/
│   │   ├── Discord_Refresh_Activities_EN-transcode.mp4/.webm
│   │   ├── Discord_Refresh_Hop-In_Fix_EN-transcode.mp4/.webm
│   │   ├── Discord_Refresh_Platforms-transcode.mp4/.webm
│   │   ├── Discord_Refresh_StatusHover_EN-transcode.mp4/.webm
│   │   ├── Discord_Website_Refresh_EN-transcode.mp4/.webm
│   │   └── Discord_Websote_Refresh_Emojis2_EN-transcode.mp4/.webm
│   │
│   ├── index.html
│   └── manifest.json
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 content/
│   │   │   └── ContentSection.js
│   │   │
│   │   ├── 📁 layout/
│   │   │   ├── Footer.js, Footer.css
│   │   │   ├── Header.js, Header.css
│   │   │   └── Main.js, Main.css
│   │   │
│   │   └── 📁 navigation/
│   │       ├── DropdownArrow.js, DropdownArrow.css
│   │       ├── DropdownContent.js
│   │       ├── LinkGroup.js
│   │       ├── LinkList.js
│   │       └── NavDropdown.js
│   │
│   ├── App.js, App.css
│   ├── discord.css
│   ├── index.js, index.css
│   └── reportWebVitals.js
│
├── 📁 .idea/
├── 📁 node_modules/
├── package.json
├── package-lock.json
└── README.md
```

### 주요 디렉토리

1. **📁 public/** - 정적 자산 파일들
   - **fonts/** - 웹 폰트 파일
   - **images/** - UI에 사용되는 모든 이미지 (로고, 아이콘, 배경 등)
   - **videos/** - 웹사이트에 사용되는 비디오 파일들

2. **📁 src/** - 소스 코드
   - **components/** - React 컴포넌트 모음
     - **content/** - 콘텐츠 섹션 관련 컴포넌트
     - **layout/** - 페이지 구조 컴포넌트 (헤더, 푸터, 메인)
     - **navigation/** - 네비게이션 관련 컴포넌트 (드롭다운, 링크 등)
   - 루트 파일들 - 앱의 진입점 및 전역 스타일

3. **설정 파일들** - 프로젝트 구성 및 의존성 관리 파일들

---

## 컴포넌트 구조

1. 헤더(Header)  
   - 네비게이션 바와 드롭다운 메뉴(보안센터, 퀘스트, 지원, 블로그, 개발자)  
2. 메인(Main)  
   - 히어로 섹션(타이틀 + 다운로드 버튼)  
   - 그룹 채팅 커스터마이징  
   - 고품질 스트리밍  
   - 쉬운 참여  
   - 플레이 중인 사용자 확인  
   - 활동 공유  
   - 크로스 플랫폼 지원  
   - 최종 배너(행동 유도)  
3. 푸터(Footer)  
   - 제품, 회사, 리소스, 정책 링크 그룹
