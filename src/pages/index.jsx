import React from 'react';
import Layout from "../layout/Layout";
import { graphql } from "gatsby";
import { getFrontmatterFromNodes } from "../utils/utils";
import { Box, Typography } from "@mui/material";
import HomeSection from "../components/HomeSection";

export default function IndexPage ({data}) {
  const sections = getFrontmatterFromNodes(data.allMdx.nodes);
  return (
    <>
      <Layout>
        <title>Giulio Savoca | Home</title>
        <Box
          component="section"
          className="section"
          sx={{
            width: '100%',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Typography component="h1" typography="h1">
            Hi, I'm Giulio Savoca
          </Typography>
          <Typography component="h2" typography="h2" color="primary">
            I master the arcane magic of the web
          </Typography>
          <Typography paragraph typography="button">
            Frontend developer | 5+ years of experience | JavaScript, Angular, React, NodeJs
          </Typography>
        </Box>
        {
          sections.map(({pageTitle, title, caption, link }) => (
            <HomeSection pageTitle={pageTitle} link={link} title={title} caption={caption} />
          ))
        }
      </Layout>
    </>
  );
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___id, order: ASC}) {
    nodes {
      frontmatter {
        caption
        link
        pageTitle
        subTitle
        title
      }
      excerpt
    }
  }
}`
