import React from 'react';
import PropTypes from 'prop-types';
import '../colors/colors.scss'; // the scss for this lives in foundatinos/colors, sorry

const TextColorSwatch = ({ txtColorsDataLight, txtColorsDataDark }) => {
  return (
    <div className="swatch-container">
      <h1>Text and Background Colors</h1>
      <h3>Light text on dark background</h3>
      <p>
        On dark backgrounds, the typography is set in white with different
        opacity according to the hierarchy (Primary, Secondary, Disabled or
        Captions).
      </p>
      <div
        className="swatch txt-bg"
        style={{
          backgroundColor: '#333333',
        }}
      >
        {txtColorsDataLight.map((txt) => (
          <div key={txt.text}>
            <p
              className="text"
              style={{
                color: txt.rgba,
                fontWeight: 400,
              }}
            >
              {txt.text}
            </p>
            <p
              className="rgba"
              style={{
                color: '#fff',
              }}
            >
              {txt.rgba}
            </p>
          </div>
        ))}
      </div>
      <h3>Dark text on light background</h3>
      <p>
        On light backgrounds, the typography is set in black with different
        opacity according to the hierarchy (as mentioned above).
      </p>
      <div
        className="swatch txt-bg"
        style={{
          backgroundColor: '#f5f5f5',
        }}
      >
        {txtColorsDataDark.map((txt) => (
          <div key={txt.text}>
            <p
              className="text"
              style={{
                color: txt.rgba,
                fontWeight: 400,
              }}
            >
              {txt.text}
            </p>
            <p
              className="rgba"
              style={{
                color: '#000',
              }}
            >
              {txt.rgba}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

TextColorSwatch.propTypes = {
  txtColorsDataLight: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      rgba: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
    })
  ).isRequired,
  txtColorsDataDark: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      rgba: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TextColorSwatch;
