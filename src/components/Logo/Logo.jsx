import React from 'react';
import styled from "styled-components";
import { Typography, useTheme } from "@mui/material";
import logo from "../../images/logo.png";

const LogoContainer = styled.div`
  display: flex;
  padding: 1em 0;
  font-family: ${props => props.logoComponent.fontFamily};
  font-size: ${props => props.logoComponent.fontSize};
  align-items: center;
  justify-content: center;
`;

export default function Logo(props) {
  const { typography } = useTheme();
  return (
    <>
      <LogoContainer logoComponent={typography.logoComponent}>
        <img src={logo} alt="savocks" width="70px"/>
        <span>
          SAVOCKS
        </span>
      </LogoContainer>
    </>
  );
}
