import { createTheme } from '@mui/material';

const lightPalette = {
  mode: 'light',
  primary: {
    main: '#212121',
  },
  secondary: {
    main: '#592a25',
  },
  background: {
    default: '#f2e9e4',
  },
};

const darkPalette = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#B2BEBF',
    },
    secondary: {
      main: '#BD2A2E',
    },
    background: {
      default: '#010101',
      paper: '#343434',
    },
  },
  typography: {
    fontFamily: '"hackman", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"regulator-nova", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontFamily: '"regulator-nova", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"regulator-nova", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontFamily: '"regulator-nova", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"regulator-nova", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"regulator-nova", "Helvetica", "Arial", sans-serif',
    },
    subtitle1: {
      fontFamily: '"byker", "Helvetica", "Arial", sans-serif',
    },
    subtitle2: {
      fontFamily: '"byker", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"hackman", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"hakcman", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"novecento-sans-wide", "Helvetica", "Arial", sans-serif',
    },
    caption: {
      fontFamily: '"novecento-sans-wide", "Helvetica", "Arial", sans-serif',
    },
    overline: {
      fontFamily: '"novecento-sans-wide", "Helvetica", "Arial", sans-serif',
    },
  },
};

export const theme = createTheme(darkPalette);

export const transitionHeader = theme.transitions.create([
  'background-color',
  'height',
]);
