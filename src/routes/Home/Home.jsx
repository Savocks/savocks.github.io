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
        Front End Developer | 5+ years of experience | Angular, React
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
    <>
      <PageTitle title={<Title />} subtitle={<Subtitle />} paragraph={<Paragraph />} />
      <Grid container rowSpacing={2} columnSpacing={3}>
        <Grid item xs={12}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>3</Item>
        </Grid>
      </Grid>
    </>
  );
}
