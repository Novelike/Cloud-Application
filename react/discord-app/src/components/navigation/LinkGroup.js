import React from 'react';

function LinkGroup({ 
  title, 
  titleHref, 
  children, 
  className = "" 
}) {
  return (
    <div className={`nav_dd_link-group ${className}`}>
      {titleHref ? (
        <a href={titleHref} className="nav_dd_link-group_title is-new-white" tabIndex="0">
          {title}
        </a>
      ) : null}
      {children}
    </div>
  );
}

export default LinkGroup;