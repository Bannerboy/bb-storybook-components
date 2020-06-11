import { create } from '@storybook/theming/create';
import logo from '../src/img/bb_logo.png';

export default create({
  base: 'light',
  barSelectedColor: '#408EEA',

  brandTitle: 'Bannerboy',
  brandUrl: 'https://bannerboy.com',
  brandImage: logo,
});
