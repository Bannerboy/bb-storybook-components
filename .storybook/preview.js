import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { GlobalStyle } from '../src/utils';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';

export const parameters = {
  options: {
    showRoots: true,
  },
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
};

addParameters({
  backgrounds: [
    { name: 'Default theme', value: '#ffffff', default: true },
    { name: 'Dark theme', value: '#050449' },
  ],
});
addDecorator(withContexts(contexts));

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));
