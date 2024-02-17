import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ExpandableComponent = ({ imageSrc, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{width: '100px'}}>
      <div
        style={{ display: "flex", alignItems: "center" , flexDirection:'column'}}
        onClick={toggleExpansion}
      >
        <img
          src={imageSrc}
          alt="Image"
          style={{ width: "50px", height: "50px" }}
        />
        <div style={{display:'flex', alignItems: 'center', gap:'15px'}}>
          <p>{text}</p>
          {isExpanded ? <FaArrowUp /> : <FaArrowDown />}
        </div>
      </div>
      {isExpanded && (
        <div>
          <h6>Example</h6>
          <h6>Example</h6>
          <h6>Example</h6>
        </div>
      )}
    </div>
  );
};

export default ExpandableComponent;
