import '../styles/globals.css';
import { theme } from '../theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
