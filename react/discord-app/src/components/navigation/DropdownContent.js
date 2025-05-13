import React from 'react';

function DropdownContent({ 
  children, 
  decorImage, 
  decorClassName = "", 
  isOneColumn = false 
}) {
  return (
    <div className="nav_dd_content-wr isnew">
      <div className={`nav_dd_content_layout top-none ${isOneColumn ? '_1-col' : ''}`}>
        {children}
      </div>
      {decorImage && (
        <img 
          src={decorImage} 
          loading="eager" 
          alt="" 
          className={`nav-dd-decor ${decorClassName}`}
        />
      )}
    </div>
  );
}

export default DropdownContent;