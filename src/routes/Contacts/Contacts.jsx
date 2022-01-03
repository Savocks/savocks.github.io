import React from 'react';
import { Box, Typography } from "@mui/material";
import Section from "../../components/Section/Section";

export default function Contacts(props) {
  return (
    <Box sx={{
      p: '3em'
    }}>
      <Section sectionTitle="Contact me">
        <Typography paragraph>
          Do you want to keep in touch with me?
        </Typography>
        <Typography paragraph>
          Fill the form below or visit my LinkedIn Page!
        </Typography>
      </Section>
    </Box>
  );
}
