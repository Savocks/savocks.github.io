import React from 'react';
import styled from "styled-components";
import { Box, Divider, Typography } from "@mui/material";
import { MDXRenderer } from "gatsby-plugin-mdx";

const StyledSection = styled.section`
  margin-top: 76px;
`;

export default function Section({pageTitle, title, subTitle, caption, link, body }) {
  return (
    <StyledSection>
      <Divider variant="middle" />
      <Typography component="h1" typography="h1" color="primary">{title}</Typography>
      {
        !body ?
          null :
          (
            <Box sx={{width: '50%'}}>
              <MDXRenderer title={title}>
                {body}
              </MDXRenderer>
            </Box>
          )
      }
    </StyledSection>
  );
}
