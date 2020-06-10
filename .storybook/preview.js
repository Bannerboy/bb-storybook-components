import React from 'react';
import { addDecorator } from '@storybook/react';

import { GlobalStyle } from '../src/utils';

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));
