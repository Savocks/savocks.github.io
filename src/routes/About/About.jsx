import React from 'react';
import Section from "../../components/Section/Section";
import ParagraphContainer from "../../components/ParagraphContainer/ParagraphContainer";
import styled from "styled-components";
import { Typography } from "@mui/material";
import InteractiveGrid from "../../components/InteractiveGrid/InteractiveGrid";

const TwoColumnUl = styled.ul`
  columns: 2;
`;

const RedMarkerLi = styled.li`
  &::marker {
    color: #660708;
  }
`;

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


const techologyList = [
  'JavaScript',
  'Angular',
  'React',
  'Vue',
  'NodeJs',
  'Java',
]

function UnorderedList(props) {
  return (
    <TwoColumnUl>
      {
        techologyList.map((techology, index) => (
          <RedMarkerLi
            key={index}
          >
            <Typography typography="h6">
              {techology}
            </Typography>
          </RedMarkerLi>))
      }
    </TwoColumnUl>
  )
}

export default function About(props) {
  return (
    <>
      <Section sectionTitle="About Me">
        <ParagraphContainer width="50%">
          <p>
            I'm Giulio Savoca.
            I was born in 1997 in Palermo, Sicily.
          </p>
          <p>
            I fell in love with computer science when I was young,
            messing around with the first PC games.
            I later studied computer science in high school and at the end I started working with JavaScript and I never
            stopped
          </p>
          <p>
            I am a sociable person, I like to work in a team and with beautiful people, always learning new things and
            applying them in projects to give the customer added value.
            I always give my best and put a lot of dedication into what I do
          </p>
        </ParagraphContainer>
      </Section>
      <Section sectionTitle="Experience">
        <ParagraphContainer width="50%">
          <p>
            Since I started working I've done a lot of things for many companies such as Lutech, Accenture and Capgemini.
          </p>
          <p>
            Below you can find the complete list of my experiences with a brief description of my job
          </p>
        </ParagraphContainer>
        <InteractiveGrid elements={experienceList} />
      </Section>
      <Section sectionTitle="My Skills">
        <ParagraphContainer width="50%">
          <p>
            In my whole career I have developed numerous Web Apps for companies
            and many projects for didactic purposes everything to improve my IT skills in all the aspect of the Web.
          </p>
          <p>
            I have worked with backend and frontend technologies specializing in the
            frontend with Vanilla JS and related frameworks
          </p>
        </ParagraphContainer>
        <UnorderedList />
      </Section>
    </>
  );
}
