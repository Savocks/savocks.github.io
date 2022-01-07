import React from 'react';
import Layout from "../layout/Layout";
import { Section } from "../components";
import { graphql } from "gatsby";
import { getMDXFromNodes } from "../utils/utils";



export default function AboutPage({ data }) {
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
        allMdx(filter: {slug: {eq: "about"}}) {
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
