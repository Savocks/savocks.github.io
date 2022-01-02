import React from 'react';
import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import PageTitle from "../../components/Title/Title";

const Title = () => (
    <>
      <Box component="div" sx={{
        textTransform: 'capitalize'
      }}>
        <Typography typography="h1" >
          Hi, I'm Giulio
        </Typography>
      </Box>
    </>
);

const Subtitle = () => (
  <>
    <Box component="div">
      <Typography typography="h2">
        I build things for the Web
      </Typography>
    </Box>
  </>
)

const Paragraph = () => (
  <>
    <Box component="div">
      <Typography paragraph>
        Front End Developer | 5+ years of experience | JavaScript, Angular, React, Node.js
      </Typography>
    </Box>
  </>
)

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home(props) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContents: 'center',
      height: '100%'
    }}>
      <PageTitle title={<Title />} subtitle={<Subtitle />} paragraph={<Paragraph />} />
    </Box>
  );
}
