import React, { useState } from 'react';
import './Header.css';
import NavDropdown from '../navigation/NavDropdown';
import DropdownContent from '../navigation/DropdownContent';
import LinkGroup from '../navigation/LinkGroup';
import LinkList from '../navigation/LinkList';

function Header() {
	// 어떤 드롭다운이 열려있는지 추적하는 상태
	const [openDropdown, setOpenDropdown] = useState(null);

	// 드롭다운 호버 처리
	const handleDropdownHover = (index) => {
		setOpenDropdown(index);
	};

	// 드롭다운 호버 이벤트 종료
	const handleDropdownLeave = () => {
		setOpenDropdown(null);
	};

	// 드롭다운 메뉴 데이터 정의
	const dropdowns = [
		{
			label: "보안센터",
			href: "#",
			decorImage: "/images/Egg.webp",
			decorClassName: "is-safety",
			isOneColumn: false,
			content: (
				<>
					<LinkGroup>
						<LinkList
							title="리소스"
							className="is-new"
							links={[
								{ href: "https://discord.com/safety-news", text: "보안 뉴스" },
								{ href: "https://discord.com/safety-library", text: "보안 라이브러리" }
							]}
						/>
					</LinkGroup>
					<LinkGroup
						title="커뮤니티 지침"
						titleHref="https://discord.com/guidelines"
						className="is_2025"
					>
						<LinkList
							title="리소스"
							links={[
								{ href: "https://discord.com/safety-privacy", text: "개인정보 보호 허브", isBlock: true },
								{ href: "https://discord.com/safety-policies", text: "정책 허브", isBlock: true },
								{ href: "https://discord.com/safety-transparency", text: "투명성 허브", isBlock: true }
							]}
						/>
						<div className="nav_dd_link_line is-n"></div>
						<LinkList
							title="문서"
							links={[
								{ href: "https://discord.com/safety-transparency-reports/2024-h1", text: "투명성 보고서", isBlock: true }
							]}
						/>
					</LinkGroup>
					<LinkGroup
						title="Family Center"
						titleHref="https://discord.com/safety-family-center"
					>
						<LinkList
							title="리소스"
							links={[
								{ href: "https://discord.com/safety-parents", text: "부모님 허브", isBlock: true },
								{ href: "https://discord.com/safety-teen-charter", text: "청소년 헌장", isBlock: true }
							]}
						/>
					</LinkGroup>
				</>
			)
		},
		{
			label: "퀘스트",
			href: "https://discord.com/ads/quests",
			decorImage: "/images/Set_1_15.webp",
			decorClassName: "",
			isOneColumn: true,
			content: (
				<LinkGroup>
					<LinkList
						title="리소스"
						links={[
							{ href: "https://discord.com/ads/quests", text: "광고" },
							{ href: "https://discord.com/ads/quests-success-stories", text: "성공 사례" },
							{ href: "https://discord.com/ads/quests-faq", text: "퀘스트 자주 묻는 질문" }
						]}
					/>
				</LinkGroup>
			)
		},
		{
			label: "지원",
			href: "https://support.discord.com/hc/",
			decorImage: "/images/Discord_Nelly_Pose2_Flying_1.webp",
			decorClassName: "is-support",
			isOneColumn: true,
			content: (
				<LinkGroup>
					<LinkList
						title="리소스"
						links={[
							{ href: "https://support.discord.com/hc/", text: "고객센터" },
							{ href: "https://support.discord.com/hc/en-us/community/topics", text: "피드백" },
							{ href: "https://support.discord.com/hc/en-us/requests/new", text: "요청 제출" }
						]}
					/>
				</LinkGroup>
			)
		},
		{
			label: "블로그",
			href: "https://discord.com/blog",
			decorImage: "/images/Clyde_Cube.webp",
			decorClassName: "is-blog",
			isOneColumn: true,
			content: (
				<LinkGroup>
					<LinkList
						title="컬렉션"
						links={[
							{ href: "https://discord.com/blog", text: "추천" },
							{ href: "https://discord.com/category/community", text: "커뮤니티" },
							{ href: "https://discord.com/category/company", text: "Discord HQ" },
							{ href: "https://discord.com/category/engineering", text: "엔지니어링 및 개발사" },
							{ href: "https://discord.com/category/how-to-discord", text: "Discord 이용 방법" },
							{ href: "https://discord.com/category/safety", text: "정책 및 안전" },
							{ href: "https://discord.com/category/product", text: "제품 및 기능" },
						]}
					/>
				</LinkGroup>
			)
		},
		{
			label: "개발자",
			href: "https://discord.com/developers",
			decorImage: "/images/Clyde.webp",
			decorClassName: "is-build",
			isOneColumn: true,
			content: (
				<>
					<LinkGroup>
						<LinkList
							title="추천"
							links={[
								{ href: "https://discord.com/developers/social-sdk", text: "Discord 소셜 SDK" },
								{ href: "https://discord.com/developers/build", text: "앱과 활동" }
							]}
						/>
						<div className="nav_dd_link_line is-n"></div>
						<LinkList
							title="문서"
							links={[
								{ href: "https://discord.com/developers", text: "Developer Home" },
								{ href: "https://discord.com/developers/docs/intro", text: "Developer Documentation" },
								{ href: "https://discord.com/developers/applications", text: "Developer Applications" },
								{ href: "https://support-dev.discord.com/hc/en-us", text: "개발자 고객센터" },
							]}
						/>
					</LinkGroup>
				</>
			)
		}
	];

	return (
		<div className="nav">
			<div className="header_wrapper">
				<a href="/" className="nav_brand">
					<img src="/images/Discrod_MainLogo.svg" alt="Discord" className="nav_brand_main-logo" />
				</a>
				<div className="nav_menu_wrapper">
					<div className="nav_menu">
						<a href="https://discord.com/download" className="nav_link">다운로드</a>
						<a href="https://discord.com/nitro" className="nav_link">Nitro</a>
						<a href="https://discord.com/servers" className="nav_link">찾기</a>
						{dropdowns.map((dropdown, index) => (
							<NavDropdown
								key={index}
								index={index}
								label={dropdown.label}
								href={dropdown.href}
								isOpen={openDropdown === index}
								onMouseEnter={handleDropdownHover}
								onMouseLeave={handleDropdownLeave}
							>
								<DropdownContent
									decorClassName={dropdown.decorClassName}
									decorImage={dropdown.decorImage}
									isOneColumn={dropdown.isOneColumn}
								>
									{dropdown.content}
								</DropdownContent>
							</NavDropdown>
						))}
						<a href="https://discord.com/careers" className="nav_link">인재 채용</a>
					</div>
				</div>
				<div className="login_btn_wrapper">
					<a href="https://discord.com/login" className="login_btn">로그인</a>
				</div>
			</div>
			<div className="nav_blur"></div>
		</div>
	);
}

export default Header;
