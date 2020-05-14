import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import './styles.scss';

const Markdown = ({ md }) => {
  return (
    <div className="bb-md-block">
      <ReactMarkdown source={md} />
    </div>
  );
};

Markdown.propTypes = {
  md: PropTypes.string.isRequired,
};

export default Markdown;
