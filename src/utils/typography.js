import { css } from 'styled-components';

export const bbFonts = {
  primaryFont: '"Helvetica Neue", sans-serif',
  headings: 'Gilroy Heavy, sans-serif',
  buttons: 'Gilroy Heavy, sans-serif',
};

export const typeScale = {
  header1: '1.8rem',
  header2: '1.6rem',
  header3: '1.4rem',
  header4: '1.2rem',
  header5: '1.1rem',
  paragraph: '1rem',
  helperText: '0.8rem',
  copyrightText: '0.6rem',
};

export const typographies = {
  header1: css`
    font-family: ${bbFonts.headings};
    font-size: ${typeScale.header1};
  `,
  header2: css({
    fontFamily: bbFonts.headings,
    fontSize: typeScale.header1,
  }),
  genericButton: css``,
  largeButton: css``,
  smallButton: css``,
};
