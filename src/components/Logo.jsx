import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useTheme } from "@mui/material";

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;

const LogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
`;

const Title = styled.div`
  font-family: ${props => props.theme.typography.logoComponent.fontFamily};
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
`;

export default function Logo(props) {
  const theme = useTheme();
  return (
    <LogoContainer>
      <LogoWrapper>
        <StaticImage src="../images/logo.png" alt="Savocks" />
      </LogoWrapper>
      <Title theme={theme}>Savocks</Title>
    </LogoContainer>
  );
}
