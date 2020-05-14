import React from 'react';
import './styles.scss';

const Centered = ({ children }) => {
  return <div className="storybook-centered-decorator">{children}</div>;
};

export default Centered;
