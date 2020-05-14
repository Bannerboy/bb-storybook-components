import React from 'react';
import Markdown from '../utils/Markdown/Markdown';

import md from './Welcome.md';

const Welcome = () => {
  return <Markdown md={md} />;
};

export default Welcome;
