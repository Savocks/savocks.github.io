import React from 'react';
import Layout from "../layout/Layout";
import { graphql } from "gatsby";
import { getFrontmatterFromNodes } from "../utils/utils";
import { BigText, Section } from "../components";
import { FullPageContainer } from "../components/FullPageContainer";
import { Box, Typography } from "@mui/material";
import { Button } from "gatsby-theme-material-ui";

export default function IndexPage ({data}) {
  const sections = getFrontmatterFromNodes(data.allMdx.nodes);
  return (
    <>
      <Layout>
        <title>Giulio Savoca | Home</title>
        <FullPageContainer>
          <Box component="section" className="section" >
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
            sections.map(({pageTitle, title, subTitle, caption, link, excerpt }) => (
              <Box component="section" className="section" >
                <BigText>{title}</BigText>
                <Typography sx={{textTransform: 'uppercase'}} component="h2" typography="h2" color="primary">
                  {title}
                </Typography>
                <Typography sx={{width: '40%', my: '1.5em'}} paragraph>
                  {caption}
                </Typography>
                <Button
                  sx={{ my: '1em'}}
                  variant="outlined"
                  color="primary"
                  to={link}>
                  {`Go to ${pageTitle}`}
                </Button>
              </Box>
            ))
          }
        </FullPageContainer>
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
