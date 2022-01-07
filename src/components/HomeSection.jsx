import React from 'react';
import { BigText } from "./index";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Button } from "gatsby-theme-material-ui";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SectionBody = styled.div`
    display: flex;
    flex-direction: ${props => props.isDesktop ? "row" : "column"};
    align-items: center;
    justify-content: space-between;
`;

export default function HomeSection({ pageTitle, title, caption, link }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
  return (
    <Wrapper>
      <BigText>{title}</BigText>
      <Typography sx={{textTransform: 'uppercase'}} component="h2" typography="h2" color="primary">
        {title}
      </Typography>
      <SectionBody isDesktop={isDesktop}>
        <Typography sx={{
          flex: isDesktop ? '1 1 50%' : '1 1 100%',
          my: isDesktop? 0 : '1.5em'
        }} paragraph>
          {caption}
        </Typography>
        <Box sx={{
          flex: isDesktop ? '1 1 50%' : '1 1 100%',
          width: isDesktop ? '50%' : '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Button
            sx={{
              width: isDesktop ? '50%' : '100%'
            }}
            variant="outlined"
            color="primary"
            to={link}>
            {`Go to ${pageTitle}`}
          </Button>
        </Box>
      </SectionBody>
    </Wrapper>

  );
}
