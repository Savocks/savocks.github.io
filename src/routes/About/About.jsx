import React from 'react';
import Section from "../../components/Section/Section";
import { Box, Paper, Typography } from "@mui/material";
import ExperienceGrid from "../../components/InteractiveGrid/InteractiveGrid";
import ParagraphContainer from "../../components/ParagraphContainer/ParagraphContainer";

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
            I later studied computer science in high school and at the end I started working with JavaScript and I never stopped
          </p>
          <p>
            I am a sociable person, I like to work in a team and with beautiful people, always learning new things and applying them in projects to give the customer added value.
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
        <ExperienceGrid />
      </Section>
    </>
  );
}
