import React from 'react';
import Layout from "../layout/Layout";
import { Section } from "../components";
import { getMDXFromNodes } from "../utils/utils";
import { graphql } from "gatsby";
import UnorderedList from "../components/UnorderedList";


const techologyList = [
  'JavaScript',
  'Angular',
  'React',
  'Vue',
  'NodeJs',
  'Java',
]

export default function SkillsPage({ data }) {
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
      <UnorderedList list={techologyList} />
    </Layout>
  );
}

export const query = graphql`
    {
        allMdx(filter: {slug: {eq: "skills"}}) {
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
