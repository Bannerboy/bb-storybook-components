import { create } from '@storybook/theming/create';
import logo from '../src/img/logo_3d_stroke_filled.png';

export default create({
  base: 'light',
  colorPrimary: '#5fadd5',
  brandTitle: 'Bannerboy',
  brandUrl: 'https://bannerboy.com',
  brandImage: logo,
});
