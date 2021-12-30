import { PageTitle } from "../../components/layout/page-title/PageTitle";
import { Section } from "../../components/layout/section/Section";
import { FaChild, FaUserGraduate, FaDraftingCompass } from "react-icons/fa";
import { Emphasized } from "../../components/typography/emphasized/Emphasized";
import { H1 } from "../../components/typography";

export function AboutMe() {
  return (
    <>
      <PageTitle>
        <H1>Here's a <Emphasized>brief story</Emphasized> about myself</H1>
      </PageTitle>
      <Section bgColor="white" direction="left">
        <p className="description">
          I am a guy born in Palermo, with a passion for information technology since I was a child.
          I started to understand what I could do with computer science, analyzing and modifying the files of the first
          games for Windows, obtaining different results from the original
        </p>
        <div className="icon">
          <FaChild />
        </div>
      </Section>
      <Section bgColor="primary" direction="left">
        <p className="description">
          I studied computer science in a local institute in Palermo and then I continued after graduation as a self-taught.
          Immediately after I started working improving more and more on JavaScript and in all the most used Frontend technologies.
        </p>
        <div className="icon">
          <FaUserGraduate />
        </div>
      </Section>
      <Section bgColor="white" direction="left">
        <p className="description">
          Today, I am studying to become a Frontend Architect and Solution Architect.
        </p>
        <div className="icon">
          <FaDraftingCompass />
        </div>
      </Section>
    </>
  )
}
