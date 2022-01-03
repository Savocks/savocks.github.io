import React from 'react';
import styled from "styled-components";

const Wrapper = styled.span`
  text-transform: uppercase;
  position: absolute;
  top: -5rem;
  left: 25vw;
  z-index: -1;
  font-size: 15rem;
  white-space: nowrap;
  opacity: .1;
  font-weight: 700;
`

export default function BigText({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
