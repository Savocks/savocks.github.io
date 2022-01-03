import React from 'react';
import styled from "styled-components";
import BigText from "../BigText/BigText";
import { Typography } from "@mui/material";

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8em 2em;
`;

const Title = ({ sectionTitle }) => (
  <Typography sx={
    {
      textTransform: 'uppercase',
    }
  } typography="h3" color="primary">
    {sectionTitle}
  </Typography>
);

export default function Section({ sectionTitle, children }) {
  return (
    <StyledSection>
      <BigText>
        { sectionTitle }
      </BigText>
      <Title sectionTitle={sectionTitle} />
      {children}
    </StyledSection>
  );
}
