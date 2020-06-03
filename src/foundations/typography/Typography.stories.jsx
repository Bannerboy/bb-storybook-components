import React from 'react';
import { storiesOf } from '@storybook/react';
import TextColorSwatch from './TextColorSwatch';
import Typography from './Typography';

const txtColorsLight = [
  {
    text: 'Primary',
    hex: '#ffffff',
    rgba: 'rgba(255, 255, 255, 1)',
  },
  {
    text: 'Secondary',
    hex: '#ffffff',
    rgba: 'rgba(255, 255, 255, 0.7)',
  },
  {
    text: 'Disabled',
    hex: '#ffffff',
    rgba: 'rgba(255, 255, 255, 0.3)',
  },
  {
    text: 'Captions',
    hex: '#ffffff',
    rgba: 'rgba(255, 255, 255, 0.5)',
  },
];

const txtColorsDark = [
  {
    text: 'Primary',
    hex: '#000000',
    rgba: 'rgba(0, 0, 0, 1)',
  },
  {
    text: 'Secondary',
    hex: '#000000',
    rgba: 'rgba(0, 0, 0, 0.7)',
  },
  {
    text: 'Disabled',
    hex: '#000000',
    rgba: 'rgba(0, 0, 0, 0.2)',
  },
  {
    text: 'Captions',
    hex: '#000000',
    rgba: 'rgba(0, 0, 0, 0.5)',
  },
];

storiesOf('Foundations/Typography', module).add('Font Usage', () => (
  <Typography />
));
storiesOf('Foundations/Typography', module).add('Text & Background', () => (
  <TextColorSwatch
    txtColorsDataLight={txtColorsLight}
    txtColorsDataDark={txtColorsDark}
  />
));
