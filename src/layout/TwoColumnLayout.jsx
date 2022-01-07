import React, { Component } from 'react';
import { CssBaseline, ThemeProvider, useTheme, withTheme } from "@mui/material";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Container from "./Container";

const LayoutContainer = styled.div`
  display: flex;
`;

function TwoColumnLayout({ drawerWidth, children }) {
  return (
    <LayoutContainer>
      <Sidebar drawerWidth={drawerWidth}/>
      <Container drawerWidth={drawerWidth}>
        { children }
      </Container>
    </LayoutContainer>
  );
}

export default TwoColumnLayout;
