import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em 4em;
  text-transform: capitalize;
`;

export default function PageTitle({styles, title, subtitle, paragraph }) {
  return (
    <>
      <Wrapper>
        {title ? title : null}
        {subtitle ? subtitle : null}
        {paragraph ? paragraph : null}
      </Wrapper>
    </>
  );
}
