import React from 'react';
import Layout from "../layout/Layout";
import { Button } from "@mui/material";
import { Section } from "../components";

export default function ContactsPage(props) {
  return (
    <Layout>
      <Section
        pageTitle="Contact Me"
        title="Contact Me"
        />
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
    </Layout>

  );
}
