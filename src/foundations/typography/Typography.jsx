import React from 'react';
// import PropTypes from 'prop-types';
import './typography.scss';

const Typography = () => {
  return (
    <div className="container">
      <h1>Typography</h1>
      <h3>Fonts</h3>

      <p className="bold">Gilroy for headlines</p>
      <ul className="disc">
        <li>Capitalised</li>
        <li>Always add a full stop at the end</li>
        <li>Font weight should be heavy</li>
        <li>Letter spacing on the negative</li>
      </ul>
      <div className="showcase">
        <h1>Headline.</h1>
        <div className="code">
          <p>font-family: &apos;Gilroy Heavy&apos;;</p>
          <p>font-size: 80px;</p>
          <p>letter-spacing: -2px;</p>
          <p>text-transform: capitalize;</p>
        </div>
      </div>
      <p className="bold">Gilroy for buttons or links </p>
      <ul className="disc">
        <li>Uppercase</li>
        <li>Font weight should be heavy</li>
        <li>Letter spacing bigger than 0</li>
      </ul>
      <div className="showcase">
        <p className="button">I am a link</p>
        <div className="code">
          <p>font-family: &apos;Gilroy Heavy&apos;;</p>
          <p>font-size: 20px;</p>
          <p>letter-spacing: 5px;</p>
          <p>text-transform: uppercase;</p>
        </div>
      </div>
      <p className="bold">Helvetica Neue for body text</p>
      <ul className="disc">
        <li>Regular font weight</li>
        <li>Regular letter spacing</li>
        <li>
          When using with google docs it should also be used for the headline
        </li>
      </ul>
    </div>
  );
};

// Typography.propTypes = {};
export default Typography;
