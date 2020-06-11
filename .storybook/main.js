const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.(jsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-contexts/register',
    '@storybook/addon-backgrounds/register',
  ],
};
