import React from 'react';

const ViewAll = ({ title, imageUrl , backgroundColor}) => {
  return (
    <div className="view-all-container" style={{ background: backgroundColor }}>
      <p style={{ color: 'white' }}>{title}</p>
      <button className="viewall-button">View All</button>
      <img src={imageUrl} alt="" className="view-all-img" />
    </div>
  );
};

export default ViewAll;