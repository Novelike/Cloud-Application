import React from 'react';
import './DropdownArrow.css';

function DropdownArrow({ isOpen = false }) {
  return (
    <div className={`nav_dd_arrow w-embed ${isOpen ? 'arrow-up' : ''}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6L8 10L4 6" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
  );
}

export default DropdownArrow;