import React from 'react';
import { storiesOf } from '@storybook/react';
// import getDocs from '../../utils/getDocs';
import ColorSwatch from './ColorSwatch';

const brandColorsData = [
  {
    background: '#3f62d6',
    name: 'blue 1',
    rgba: 'rgba(63, 98, 214, 1)',
  },
  {
    background: '#5fadd5',
    name: 'blue 2',
    rgba: 'rgba(95, 173, 213, 1)',
  },
  {
    background: '#72f6fd',
    name: 'cyan',
    rgba: 'rgba(114, 246, 253, 1)',
  },
  {
    background: '#162b2f',
    name: 'dark blue',
    rgba: 'rgba(22, 43, 47, 1)',
  },
  {
    background: '#6dd982',
    name: 'green',
    rgba: 'rgba(109, 217, 130, 1)',
  },
  {
    background: '#fbe470',
    name: 'yellow',
    rgba: 'rgba(251, 228, 112, 1)',
  },
  {
    background: '#e6515b',
    name: 'red',
    rgba: 'rgba(230, 81, 91, 1)',
  },
  {
    background: '#aa7ff2',
    name: 'violet',
    rgba: 'rgba(170, 127, 242, 1)',
  },
  {
    background: '#d291cf',
    name: 'light  magenta',
    rgba: 'rgba(210, 145, 207, 1)',
  },
  {
    background: '#ffffff',
    name: 'white',
    rgba: 'rgba(255, 255, 255, 1)',
  },
  {
    background: '#000000',
    name: 'black',
    rgba: 'rgba(0, 0, 0, 1)',
  },
];

storiesOf('Foundations/Colors', module).add('Branding', () => (
  <ColorSwatch colorsData={brandColorsData} />
));