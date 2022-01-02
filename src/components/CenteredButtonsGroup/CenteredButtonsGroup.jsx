import React from 'react';
import styled from "styled-components";

const CenteredNavBarButtons = styled.div`
  margin:0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function CenteredButtonsGroup({ children }) {
  return (
    <>
      <CenteredNavBarButtons>
        {children}
      </CenteredNavBarButtons>
    </>
  );
}
