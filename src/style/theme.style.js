import {
  darkModeBackground,
  darkModeElement,
  darkModeText,
  lightModeBackground,
  lightModeElement,
  lightModeInput,
  lightModeText,
} from "./_variables";

export const lightTheme = {
  body: lightModeBackground,
  text: lightModeText,
  elementColor: lightModeElement,
  cardBoxShadow: `#ccc`,
  inputBoxShadow1: `rgba(0, 0, 0, 0.06)`,
  inputBoxShadow2: `rgba(0, 0, 0, 0.12)`,
  input: `white`,
  modalBackground: lightModeBackground,
};

export const darkTheme = {
  body: darkModeBackground,
  text: darkModeText,
  elementColor: darkModeElement,
  cardBoxShadow: `#191919`,
  inputBoxShadow1: `rgba(0, 0, 0, 0.5)`,
  inputBoxShadow2: `rgba(0, 0, 0, 0.5)`,
  input: darkModeElement,
  modalBackground: darkModeBackground,
};
