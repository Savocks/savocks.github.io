import { PageTitle } from "../../components/layout/page-title/PageTitle";
import { Section } from "../../components/layout/section/Section";
import { FaAngular, FaChalkboardTeacher, FaJs, FaLaptopCode, FaNodeJs, FaReact } from "react-icons/fa";
import { Emphasized } from "../../components/typography/emphasized/Emphasized";
import { Quote } from "../../components/typography/quote/Quote";

const title = (<h1>Hi I'm <Emphasized>Giulio Savoca</Emphasized></h1>);
const subtitle = (<h2>I <Emphasized>Build</Emphasized> things for the Web</h2>);
const quote = (<Quote
    quote="When you’re curious, you find lots of interesting things to do."
    author="Walt Disney"/>
);

export function Contacts() {
  return (
    <>
      <PageTitle title={title} subtitle={subtitle} quote={quote} />
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

