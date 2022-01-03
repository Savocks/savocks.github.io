import React from 'react';
import { Box, Paper } from "@mui/material";
import Section from "../../components/Section/Section";

export default function Projects(props) {
  return (
    <Box sx={{
      p: '3em'
    }}>
      <Section sectionTitle="Projects">

      </Section>
      <Paper sx={{
        mt: '2em'
      }}
             component="section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id libero, saepe. Accusamus accusantium at atque beatae,
        consequatur debitis deleniti eligendi error ex ipsa ipsam possimus quaerat sit voluptas voluptates, voluptatibus?
      </Paper>
    </Box>
  );
}
