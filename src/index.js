import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import './index.scss';
import { createTheme, Paper, ThemeProvider } from "@mui/material";

const themeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#981917',
    },
    secondary: {
      main: '#179698',
    },
    facebookLogo: '#1877f2',
    linkedInLogo: '#0a66c2',
    instagramLogo: '#c32aa3'
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    button: {
      fontFamily: '"VT323", "Helvetica", "Arial", monospaced',
      letterSpacing: '0.20em',
      fontSize: '20px'
    },
    logoComponent: {
      fontFamily: '"Oswald", "Helvetica", "Arial", sans-serif',
      fontSize: '20px',
    }
  }
};
const theme = createTheme(themeOptions)
ReactDOM.render(
  <ThemeProvider theme={theme} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
