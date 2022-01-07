import React from 'react';
import TwoColumnLayout from "./TwoColumnLayout";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import theme from '../themes/theme';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Container from "./Container";
library.add(fab, fas, far);


function Layout({ children }) {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
        matches ?
          (
            <TwoColumnLayout drawerWidth="240px">
              {children}
            </TwoColumnLayout>
          ) :
          <Container>
            {children}
          </Container>
      }
    </ThemeProvider>

  )
}

export default Layout;
