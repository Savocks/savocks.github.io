import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#981917',
    },
    secondary: {
      main: '#179698',
    }
  },
  zIndex: {
    hamburgerMenu: 1201
  },
  components: {
    MuiDrawer: {
      drawerHeaderHeight: '100px',
      styleOverrides: {
        root: {
          width: '300px'
        }
      }
    }
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
});

export default theme;
