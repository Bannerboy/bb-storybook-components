import React from 'react';
import PropTypes from 'prop-types';
import './colors.scss';

const ColorSwatch = ({ colorsData }) => {
  return (
    <div className="swatch-container">
      <h1>BB branding colors</h1>
      {colorsData.map((color) => (
        <div className="swatch" key={color.name}>
          <div
            style={{
              backgroundColor: color.background,
              width: '100px',
              height: '100px',
              border: '1px solid #333333',
            }}
          />
          <div className="swatch-info">
            <h3>{color.name}</h3>
            <p className="hex">{color.background}</p>
            <p>{color.rgba}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

ColorSwatch.propTypes = {
  colorsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      rgba: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ColorSwatch;
