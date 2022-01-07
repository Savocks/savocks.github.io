import React from 'react';
import styled from "styled-components";
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { MDXRenderer } from "gatsby-plugin-mdx";

const StyledSection = styled.section`
`;

export default function Section({pageTitle, title, subTitle, caption, link, body }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
  return (
    <StyledSection>
      <Divider variant="middle" sx={{
        width: '100%',
        position: 'absolute',
        top: '100px',
      }}/>
      <Typography
        component="h1"
        typography="h1"
        color="primary"
        sx={{
          mt: '100px',
        }}
      >{title}</Typography>
      <Box sx={{
        width: isDesktop ? '50%' : '100%'
      }}>
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
      </Box>
    </StyledSection>
  );
}
