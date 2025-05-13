# Discord 클론 React 앱

이 프로젝트는 원본 Discord 홈페이지를 완벽하게 재현한 React 기반 웹 애플리케이션이다. 헤더, 메인, 푸터를 포함한 모든 섹션과 스타일링을 동일하게 구현했다.

## 프로젝트 구조

public/  
├─ img/           # 메인 배경 이미지  
├─ images/        # 다운로드된 이미지  
├─ fonts/         # 다운로드된 폰트  
├─ videos/        # 다운로드된 비디오  
├─ index.html     # HTML 템플릿  
└─ manifest.json  # 웹 앱 매니페스트  

src/  
├─ components/  
│  ├─ Header.js  
│  ├─ Header.css  
│  ├─ Main.js  
│  ├─ Main.css  
│  ├─ Footer.js  
│  └─ Footer.css  
├─ App.js         # 메인 App 컴포넌트  
├─ App.css        # 추가 글로벌 스타일  
├─ index.js       # 진입점  
└─ discord.css    # 원본 클론 전역 스타일  

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