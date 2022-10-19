import React from "react";
import TextSection from "../../../components/TextSection";
import picture from "/audiophille.webp";
import IndividualProject from "../../../components/IndividualProject";

export { Page };
export const documentProps = {
  title: "Audiophille-Project",
};

function Page() {
  const props = {
    title: "Audiophille Website",
    liveLink: "https://audiophile-website-six.vercel.app/",
    repoLink: "https://github.com/ngeorge07/audiophile-website",
    photo: `${picture}`,
  };

  return (
    <IndividualProject {...props}>
      <TextSection title="Tech stack">
        I build this project using: Next.js, TypeScript for type checking,
        Tailwind for styling, Storybook for previewing and testing component,
        Redux Toolkit for state management and Husky for Git Hooks.
      </TextSection>

      <span className="vertical-line"></span>

      <TextSection title="About">
        This was a project I built in my free time while working as a frontend
        developer. I wanted to experiment with creating strict project structure
        with Next.js and TypeScript. I also implemented Redux Toolkit to help
        with state management when the project started to grow. This project is
        a challenge on{" "}
        <a
          href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
          target="_blank"
          className="inline-link">
          Frontend Mentor
        </a>
      </TextSection>
    </IndividualProject>
  );
}
