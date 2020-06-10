import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { defaultTheme, bbFonts, typeScale } from '../../utils';

const BUTTON_MODIFIERS = {
  small: () => `
  font-size: ${typeScale.copyrightText};
  padding: 10px;
  `,
  large: () => `
  font-size: ${typeScale.header5};
  padding: 30px 35px;
  `,
};

export const Button = styled.button`
  /* general styles for buttons */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: ${bbFonts.buttons};
  text-transform: uppercase;
  font-size: ${typeScale.helperText};
  text-decoration: none;
  letter-spacing: 2px;
  padding: 15px 20px;
  min-width: 150px;
  border: 3px solid ${defaultTheme.primaryColor};
  border-radius: 50px;
  transition: color 1s linear;
  &:disabled {
    cursor: not-allowed;
  }
`;
export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};

  &:hover {
    background-color: ${defaultTheme.buttonPrimaryHover};
    border-color: ${defaultTheme.buttonPrimaryHover};
  }
  &:disabled {
    background-color: ${defaultTheme.disabledBg};
    color: ${defaultTheme.white};
    border-color: ${defaultTheme.disabledBg};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  border-color: black;
  color: ${defaultTheme.textColor};
  background: none;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    border-color: ${defaultTheme.disabledBg};
    color: ${defaultTheme.disabledBlack};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TerciaryButton = styled(Button)`
  border: none;
  color: black;
  background: none;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    color: ${defaultTheme.disabledBlack};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
