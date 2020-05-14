import React from 'react';
import { storiesOf } from '@storybook/react';
import css from './button.scss';
import getDocs from '../../utils/getDocs';
import Button from './Button';
import Centered from '../../../.storybook/decorators/Centered/Centerd';

storiesOf('Components/Button', module)
  .addDecorator((storyFn) => <Centered>{storyFn()}</Centered>)
  .addParameters(getDocs('', <Button>I am a button</Button>, css))
  .add('default', () => <Button>I am a button</Button>);

storiesOf('Components/Button', module)
  .addDecorator((storyFn) => <Centered>{storyFn()}</Centered>)
  .addParameters(getDocs('', <Button filled>I am a button</Button>, css))
  .add('filled', () => <Button filled>I am a button</Button>);
