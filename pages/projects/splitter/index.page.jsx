import TextSection from "../../../components/TextSection";
import IndividualProject from "../../../components/IndividualProject";

import picture from "/splitter.webp";

export { Page };
export const documentProps = {
  title: "Splitter-Project",
};

function Page() {
  const props = {
    title: "Tip Calculator App",
    liveLink: "https://tipcalculatorapp-gn.netlify.app/",
    repoLink: "https://github.com/ngeorge07/React-tip-calculator-app",
    photo: `${picture}`,
  };

  return (
    <IndividualProject {...props}>
      <TextSection title="Tech stack">
        Made with React, styled with Tailwind and built with Vite.
      </TextSection>

      <span className="vertical-line"></span>

      <TextSection title="About">
        Insert the bill amount, the number of people sharing and the amount you
        want to tip and the calculator will take care of the rest. Challenged by{" "}
        <a
          className="inline-link"
          href="https://www.frontendmentor.io?ref=challenge"
        >
          Frontend Mentor
        </a>
        .
      </TextSection>
    </IndividualProject>
  );
}
