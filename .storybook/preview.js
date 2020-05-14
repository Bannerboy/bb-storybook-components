import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import GlobalStlyes from './decorators/GlobalStyles/GlobalStyles';

addDecorator(withInfo);
addDecorator((storyFn) => <GlobalStlyes>{storyFn()}</GlobalStlyes>);
