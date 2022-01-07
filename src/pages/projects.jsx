import React from 'react';
import Layout from "../layout/Layout";
import { getMDXFromNodes } from "../utils/utils";
import { Section } from "../components";
import { graphql } from "gatsby";

export default function ProjectsPage({ data }) {
  const { pageTitle, title, subTitle, caption, link, body } = getMDXFromNodes(data.allMdx.nodes[0])
  return (
    <Layout>
      <Section
        pageTitle={ pageTitle }
        title={ title }
        subTitle={ subTitle }
        caption={ caption }
        link={ link }
        body={ body }/>
    </Layout>
  );
}

export const query = graphql`
    {
        allMdx(filter: {slug: {eq: "projects"}}) {
            nodes {
                frontmatter {
                    caption
                    link
                    pageTitle
                    subTitle
                    title
                    id
                }
                body
            }
        }
    }
`
