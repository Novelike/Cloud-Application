import React from 'react';

function ContentSection({ 
  sectionNumber, 
  title, 
  description, 
  videoSources, 
  isReversed = false, 
  decorativeImages = [], 
  className = "" 
}) {
  return (
    <section className={`section${sectionNumber} global_section ${className}`}>
      <div className="global_padding">
        <div className="global_container">
          <div className="global_animation">
            {/* 장식 이미지 렌더링 (상단) */}
            {decorativeImages.filter(img => img.position === 'top').map((img, index) => (
              <img
                key={`top-img-${index}`}
                src={img.src}
                loading="lazy"
                alt={img.alt || ""}
                className={img.className}
                width={img.width}
                height={img.height}
              />
            ))}
            
            <div className={`global_block_group ${className ? `section${sectionNumber}` : ""}`}>
              <div className="global_layout">
                {!isReversed ? (
                  <>
                    <div className="global_image_wrapper">
                      <div className={`global_video_wrapper ${className ? `section${sectionNumber}` : ""}`}>
                        <video autoPlay loop muted playsInline>
                          {videoSources.map((source, index) => (
                            <source key={index} src={source} />
                          ))}
                        </video>
                      </div>
                    </div>
                    <div className="global_text_wrapper">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="global_text_wrapper">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                    <div className="global_image_wrapper">
                      <div className={`global_video_wrapper ${className ? `section${sectionNumber}` : ""}`}>
                        <video autoPlay loop muted playsInline>
                          {videoSources.map((source, index) => (
                            <source key={index} src={source} />
                          ))}
                        </video>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* 장식 이미지 렌더링 (하단) */}
            {decorativeImages.filter(img => img.position === 'bottom').map((img, index) => (
              <img
                key={`bottom-img-${index}`}
                src={img.src}
                loading="lazy"
                alt={img.alt || ""}
                className={img.className}
                width={img.width}
                height={img.height}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;