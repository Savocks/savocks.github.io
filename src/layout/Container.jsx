import React from 'react';
import styled from "styled-components";



const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 1em 2em;
`;

export default function Container({ isMobile=true, drawerWidth, children }) {
  return (
    <Wrapper isMobile={isMobile} drawerWidth={drawerWidth} >
      { children }
    </Wrapper>
  );
}
