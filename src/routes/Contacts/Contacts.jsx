import React from 'react';
import { Button, Typography } from "@mui/material";
import Section from "../../components/Section/Section";

export default function Contacts(props) {
  return (
    <Section sectionTitle="Contacts">
      <p>
        Do you want to keep in touch with me?
      </p>
      <p>
        Fill the form below or visit my
        <Button
          variant="link"
          href="https://www.linkedin.com/in/giulio-savoca-09b205142/"
          target="_blank"
        >
          LinkedIn
        </Button>
        page.
      </p>
    </Section>
  );
}
