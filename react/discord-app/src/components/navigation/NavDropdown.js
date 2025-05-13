import React from 'react';
import DropdownArrow from './DropdownArrow';

function NavDropdown({ 
  index, 
  label, 
  href, 
  isOpen, 
  onMouseEnter, 
  onMouseLeave, 
  children,
  dropdownClassName = "is-safety" // Default to is-safety for backward compatibility
}) {
  return (
    <div 
      className="nav_dd is-relative w-dropdown"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <div className={`nav_dd_trigger w-dropdown-toggle ${isOpen ? 'w--open' : ''}`}>
        <div>{label}</div>
        <div className="nav_dd_arrow-wr-white">
          <DropdownArrow isOpen={isOpen} />
        </div>
        <a href={href} className="nav_link_dropdown w-inline-block"></a>
      </div>
      <div 
        className={`nav_dd_list ${dropdownClassName} w-dropdown-list ${isOpen ? 'w--open' : ''}`}
        style={isOpen ? {position: 'absolute'} : {}}
      >
        {children}
      </div>
    </div>
  );
}

export default NavDropdown;
