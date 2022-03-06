import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/hdx7cyy.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
