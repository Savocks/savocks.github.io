import React from 'react';
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Menu, Close } from '@mui/icons-material'


const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 1em 2em;
  overflow-x: hidden;
`;

export default function Container({ children }) {

  return (
    <Wrapper>
      { children }
    </Wrapper>
  );
}
