import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width ? props.width : '100%'}
`

export default function ParagraphContainer({ width, children }) {
  return (
    <Wrapper width={width}>
      {children}
    </Wrapper>
  );
}
