import PropTypes from 'prop-types';
import React from 'react';
import './position.css';
const StaticInput = ({ value, position }) => {
  return (
    <div className='position' style={{ top: position.top, left: position.left }}>
      <input
        type="text"
        value={value}
        readOnly // Make the input non-editable
        style={{
          width: '100px', // Adjust width as needed
          height: '30px', // Adjust height as needed
          borderRadius: '5px', // Adjust border radius as needed
          border: '1px solid #ccc', // Adjust border style as needed
          padding: '5px', // Adjust padding as needed
          backgroundColor: '#4EBFB9', // Adjust background color as needed
          color: '#333', // Adjust text color as needed
          cursor: 'default' // Prevent cursor change on hover
        }}
      />
    </div>
  );
};

StaticInput.propTypes = {
  value: PropTypes.string.isRequired,
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired
  }).isRequired
};

export default StaticInput;
