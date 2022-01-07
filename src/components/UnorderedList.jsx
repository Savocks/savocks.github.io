import React from 'react';
import { Typography } from "@mui/material";
import styled from "styled-components";

const TwoColumnUl = styled.ul`
  columns: 2;
`;

const RedMarkerLi = styled.li`
  &::marker {
    color: #660708;
  }
`;

export default function UnorderedList({ list }) {
  return (
    <TwoColumnUl>
      {
        list.map((element, index) => (
          <RedMarkerLi
            key={index}
          >
            <Typography typography="h6">
              {element}
            </Typography>
          </RedMarkerLi>)
        )}
    </TwoColumnUl>
  );
}
