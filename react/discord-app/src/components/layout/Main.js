import React from 'react';
import './Main.css';
import ContentSection from '../content/ContentSection';

function Main() {
	// 섹션 데이터 정의
	const sections = [
		{
			sectionNumber: 2,
			title: "그룹 채팅을 더 재밌게 만드세요",
			description: "사용자 지정 이모티콘, 스티커, 사운드보드 효과 등을 사용해 음성 채팅, 영상 채팅, 텍스트 채팅에 개성을 더해 주세요. 아바타와 사용자 지정 상태를 설정하고 프로필을 만들어 나만의 방식으로 채팅에 보여주세요.",
			videoSources: [
				"/videos/Discord_Websote_Refresh_Emojis2_EN-transcode.mp4",
				"/videos/Discord_Websote_Refresh_Emojis2_EN-transcode.webm"
			],
			isReversed: false,
			decorativeImages: [
				{
					src: "/images/party_wumpus.gif",
					alt: "Party Wumpus",
					className: "wumpus_top",
					position: "top"
				}
			]
		},
		{
			sectionNumber: 3,
			title: "같은 방에 있는 것 같은 방송",
			description: "지연 시간이 짧은 고품질의 방송 덕분에 게임을 방송하거나, 쇼를 시청하거나, 사진을 보거나, 숙제를 할 때도 친구와 소파에 앉아 노는 기분이 들 것입니다.",
			videoSources: [
				"/videos/Discord_Website_Refresh_EN-transcode.mp4",
				"/videos/Discord_Website_Refresh_EN-transcode.webm"
			],
			isReversed: true,
			decorativeImages: [
				{
					src: "/images/Clyde-Cube.webp",
					alt: "",
					className: "clyde-cube",
					position: "bottom"
				}
			],
			className: "section3"
		},
		{
			sectionNumber: 4,
			title: "전화할 필요 없이 한가할 때 참여하세요",
			description: "전화하거나 초대할 필요 없이 언제든 음성 채팅이나 텍스트 채팅에 쉽게 참여하고 나갈 수 있어 게임 세션 전이든 도중이든 후든 파티 채팅을 계속 이어 할 수 있습니다.",
			videoSources: [
				"/videos/Discord_Refresh_Hop-In_Fix_EN-transcode.mp4",
				"/videos/Discord_Refresh_Hop-In_Fix_EN-transcode.webm"
			],
			isReversed: false,
			decorativeImages: [
				{
					src: "/images/Box.webp",
					alt: "",
					className: "box_top",
					position: "top"
				}
			],
			className: "section4"
		},
		{
			sectionNumber: 5,
			title: "함께 놀 사람이 있는지 확인하세요",
			description: "누가 게임을 플레이 중이거나 놀고 있는지 확인해 보세요. 지원되는 게임의 경우 친구들이 어떤 모드나 캐릭터를 플레이하고 있는지 확인하고 바로 참여할 수 있습니다.",
			videoSources: [
				"/videos/Discord_Refresh_StatusHover_EN-transcode.mp4",
				"/videos/Discord_Refresh_StatusHover_EN-transcode.webm"
			],
			isReversed: true,
			decorativeImages: [],
			className: "section5"
		},
		{
			sectionNumber: 6,
			title: "항상 함께할 수 있는 활동",
			description: "동영상을 시청하거나, 내장된 게임을 플레이하거나 음악을 듣거나 그냥 스크롤하며 밈을 잔뜩 보내세요. 하나의 그룹 채팅에서 원활하게 텍스트를 보내고, 통화하고, 영상 채팅을 하고, 게임을 플레이할 수 있습니다.",
			videoSources: [
				"/videos/Discord_Refresh_Activities_EN-transcode.mp4",
				"/videos/Discord_Refresh_Activities_EN-transcode.webm"
			],
			isReversed: false,
			decorativeImages: [
				{
					src: "/images/Set_3_3.webp",
					alt: "",
					className: "coin_bg",
					position: "top",
					width: "139",
					height: "Auto"
				},
				{
					src: "/images/Set_2_4.webp",
					alt: "",
					className: "turnip_bg",
					position: "top",
					width: "139",
					height: "Auto"
				}
			],
			className: "section6",
			// 섹션 6에는 특별한 캐릭터 이미지가 있어 별도 처리 필요
			specialContent: (
				<div className="characters_wrapper">
					<div className="characters_area">
						<img
							src={process.env.PUBLIC_URL + '/images/woman-top.webp'}
							loading="lazy"
							width="100%"
							height="auto"
							srcSet={`${process.env.PUBLIC_URL}/images/woman-top-p-500.webp 500w, 
                          ${process.env.PUBLIC_URL}/images/woman-top-p-800.webp 800w, 
                          ${process.env.PUBLIC_URL}/images/woman-top.webp 816w`}
							sizes="(max-width: 816px) 100vw, 816px"
							alt="Discord character woman top"
							className="characters-bot"
						/>
						<img
							src={process.env.PUBLIC_URL + '/images/woman-bottom.webp'}
							loading="lazy"
							width="100%"
							height="auto"
							srcSet={`${process.env.PUBLIC_URL}/images/woman-bottom-p-500.webp 500w,
                          ${process.env.PUBLIC_URL}/images/woman-bottom-p-800.webp 800w,
                          ${process.env.PUBLIC_URL}/images/woman-bottom.webp 821w`}
							sizes="(max-width: 821px) 100vw, 821px"
							alt="Discord character woman bottom"
							className="characters-top"
						/>
					</div>
					<img
						src="/images/Men.webp"
						loading="lazy"
						alt=""
						className="characters"
					/>
				</div>
			)
		},
		{
			sectionNumber: 7,
			title: "어디서 게임을 하든 여기서 어울리세요",
			description: "PC든, 휴대전화든, 콘솔이든 Discord에서 어울릴 수 있습니다. 기기 간에 쉽게 전환하고 도구를 사용하여 친구들과 여러 개의 그룹 채팅을 관리할 수 있습니다.",
			videoSources: [
				"/videos/Discord_Refresh_Platforms-transcode.mp4",
				"/videos/Discord_Refresh_Platforms-transcode.webm"
			],
			isReversed: true,
			decorativeImages: [
				{
					src: "/images/Set_3_4.webp",
					alt: "",
					className: "plump",
					position: "bottom",
					width: "139",
					height: "Auto"
				}
			],
			className: "section7"
		}
	];

	// 섹션 6을 위한 특별 렌더링 함수
	const renderSection6 = () => {
		const section = sections[4]; // 인덱스 4는 섹션 6
		return (
			<section className={`section${section.sectionNumber} global_section ${section.className}`}>
				<div className="global_padding">
					<div className="global_container">
						{section.decorativeImages.map((img, index) => (
							<img
								key={`decorative-img-${index}`}
								src={img.src}
								loading="lazy"
								width={img.width}
								height={img.height}
								alt={img.alt || ""}
								className={img.className}
							/>
						))}
						<div className="global_animation">
							{section.specialContent}
							<div className={`global_block_group ${section.className}`}>
								<div className="global_layout">
									<div className="global_image_wrapper">
										<div className={`global_video_wrapper ${section.className}`}>
											<video autoPlay loop muted playsInline>
												{section.videoSources.map((source, index) => (
													<source key={index} src={source} />
												))}
											</video>
										</div>
									</div>
									<div className="global_text_wrapper">
										<h2>{section.title}</h2>
										<p>{section.description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	return (
		<main>
			{/* 첫 번째 섹션 - 특별한 구조이므로 별도로 유지 */}
			<section className="section1 main_contents">
				<div className="padding_wrapper">
					<div className="main_content_wrapper">
						<div className="main_content_area">
							<div className="main_text_wrapper">
								<h1>재미와 게임으로 가득한 그룹 채팅</h1>
								<p>
									Discord는 친구들과 게임을 플레이하며
									놀거나 글로벌 커뮤니티를 만들기에
									좋습니다. 나만의 공간을 만들어 대화하고,
									게임을 플레이하며, 어울려 보세요.
								</p>
							</div>
							<div className="main_image_wrapper">
								<div className="main_image_area"></div>
							</div>
						</div>
						<div className="main_download_area">
							<a href="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64">
								<svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt">
									<g fill="currentColor">
										<path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
										<path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
									</g>
								</svg>
								Windows용 다운로드
							</a>
							<button className="open_discord_in_browser">
								웹브라우저에서 Discord 열기
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* 반복되는 섹션들을 ContentSection 컴포넌트로 렌더링 */}
			{sections.slice(0, 4).map((section, index) => (
				<ContentSection
					key={index}
					sectionNumber={section.sectionNumber}
					title={section.title}
					description={section.description}
					videoSources={section.videoSources}
					isReversed={section.isReversed}
					decorativeImages={section.decorativeImages}
					className={section.className}
				/>
			))}

			{/* 섹션 6은 특별한 구조를 가지므로 별도 렌더링 */}
			{renderSection6()}

			{/* 섹션 7 */}
			<ContentSection
				sectionNumber={sections[5].sectionNumber}
				title={sections[5].title}
				description={sections[5].description}
				videoSources={sections[5].videoSources}
				isReversed={sections[5].isReversed}
				decorativeImages={sections[5].decorativeImages}
				className={sections[5].className}
			/>

			{/* 마지막 배너 섹션 - 특별한 구조이므로 별도로 유지 */}
			<section className="discord_banner">
				<div className="global_padding">
					<div className="discord_container">
						<div className="banner_wrapper">
							<h2 className="banner_h2">
								더는 스크롤할 수 없어요.
								<br />
								채팅을 하러 가세요.
							</h2>
							<div className="banner_btn_area">
								<a href="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64">
									Windows용 다운로드
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="banner_images">
					<img
						src="/images/Footer.webp"
						loading="eager"
						width="1440"
						alt="YOU CAN'T SCROLL ANYMORE.BETTER GO CHAT."
						className="discord_img"
					/>
					<div className="wumpus_footer_home_container">
						<img
							src="/images/Wumpus_copy.webp"
							loading="eager"
							width="174"
							height="Auto"
							alt=""
							className="wumpus_footer_home"
						/>
						<div className="wumpus_footer_home block">
							<img
								src="/images/Wumpus.webp"
								loading="lazy"
								alt=""
								className="wumpus_footer_list"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;