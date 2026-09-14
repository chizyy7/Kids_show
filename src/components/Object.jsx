import React from 'react';
import PropTypes from 'prop-types';

const ObjectDisplay = ({ name, x, y }) => {
  const src = `/assets/objects/${name}.svg`;
  return (
    <img
      src={src}
      alt={name}
      className="object-img"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        position: 'absolute'
      }}
    />
  );
};

ObjectDisplay.propTypes = {
  name: PropTypes.oneOf(['apple', 'butterfly', 'flower']).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default ObjectDisplay;
