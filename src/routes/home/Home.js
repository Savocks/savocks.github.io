import React from "react";
import { PageTitle } from "../../components/layout/page-title/PageTitle";
import { Quote } from "../../components/typography/quote/Quote";
import { Emphasized } from "../../components/typography/emphasized/Emphasized";
import { Section } from "../../components/layout/section/Section";
import { FaLaptopCode, FaNodeJs, FaJs, FaAngular, FaReact, FaChalkboardTeacher } from 'react-icons/fa';
import { H1, H2 } from "../../components/typography";

export function Home() {
  return (
    <>
      <PageTitle >
        <H1>
          Hi I'm <Emphasized>Giulio Savoca</Emphasized>
        </H1>
        <H2>
          I <Emphasized>Build</Emphasized> things for the Web
        </H2>
        <Quote
          quote="When you’re curious, you find lots of interesting things to do."
          author="Walt Disney"/>
      </PageTitle>
      <Section bgColor="white" direction="left">
        <p className="description">
          I'm a Frontend Developer with 5 years of experience.
          I've worked for Big Companies such as Lutech, Accenture and now I'm actually employed in Capgemini
        </p>
        <div className="icon">
          <FaLaptopCode />
        </div>
      </Section>
      <Section bgColor="primary" direction="left">
        <p className="description">
          I like coding with the major frameworks of the moment, such as Angular and React.
          Also I like to work on the backend with Node.Js
        </p>
        <div className="icon">
          <FaJs />
          <FaNodeJs />
          <FaAngular />
          <FaReact />
        </div>
      </Section>
      <Section bgColor="white" direction="left">
        <p className="description">
          I also love to teach!
          I recently did some classes for new hires in the company about Web Design!
        </p>
        <div className="icon">
          <FaChalkboardTeacher />
        </div>
      </Section>
    </>
  );
}
