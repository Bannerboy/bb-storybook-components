import { bbColors, bbNeutrals, interfaceActions } from './colors';
import { bbFonts } from './typography';

export const defaultTheme = {
  primaryColor: bbColors.bbBlue,
  textColorOnPrimary: bbNeutrals.white,
  textColor: bbNeutrals.black,
  textColorSecondary: bbNeutrals.blackSecondary,
  textColorInverted: bbNeutrals.white,
  primaryFont: bbFonts.primaryFont,
  headingsFont: bbFonts.heading,
  buttonsFont: bbFonts.button,
  buttonPrimaryHover: bbColors.bbDark,
  disabledBlack: bbNeutrals.textBlackDisabled,
  disabledWhite: bbNeutrals.textWhiteDisabled,
  disabledBg: bbNeutrals.lightGray,
  status: {
    warningColor: interfaceActions.warning,
    errorColor: interfaceActions.error,
    successColor: interfaceActions.success,
  },
};

export const darkTheme = {};
