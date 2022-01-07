import React from 'react';
import Layout from "../layout/Layout";
import { InteractiveGrid, ParagraphContainer, Section } from "../components";
import { getMDXFromNodes } from "../utils/utils";
import { graphql } from "gatsby";

const experienceList = [
  {
    id: 1,
    company: 'Lutech',
    from: 2017,
    to: 2018,
    description: 'Developing Web Apps for ServiceNow with AngularJS. Custom Web Apps with Angular and an e-commerce with Magento2',
  },
  {
    id: 2,
    company: 'Accenture',
    from: 2018,
    to: 2019,
    description: 'Developed Web Apps with AngularJs, Angular and VueJs'
  },
  {
    id: 3,
    company: 'Capgemini',
    from: 2019,
    to: 'Today',
    description: 'Developed Web Apps with Angular, I taught a new hire course on JavaScript, HTML, CSS, and web development in general '
  }
]


export default function ExperiencePage({ data }) {
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
      <InteractiveGrid elements={experienceList} />
    </Layout>
  );
}

export const query = graphql`
    {
        allMdx(filter: {slug: {eq: "experience"}}) {
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
