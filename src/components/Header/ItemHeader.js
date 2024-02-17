import React from "react";

const ItemHeader = ({ count, icon, text, description, className, classNameContainer, backgroundColor, color }) => {
  return (
    <div className={classNameContainer}>
      {count > 0 && <span className="wishlist-count" style={{backgroundColor: backgroundColor, color: color}}>{count}</span>}
      <div>{icon}</div>
      <div style={{ display: "flex", flexDirection:'column' }}>
        <span className={className}>{text}</span>
        <span className={className}>{description}</span>
      </div>
    </div>
  );
};

export default ItemHeader;
