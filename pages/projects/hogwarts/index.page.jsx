import React from "react";
import TextSection from "../../../components/TextSection";
import picture from "/hacked-hogwarts.webp";
import IndividualProject from "../../../components/IndividualProject";

export { Page };
export const documentProps = {
  title: "Hacked-Hogwarts-Project",
};

function Page() {
  const props = {
    title: "Hacked Hogwarts",
    liveLink: "https://hacked-hogwarts.netlify.app/",
    repoLink: "https://github.com/ngeorge07/hacked-hogwarts",
    photo: `${picture}`,
  };

  return (
    <IndividualProject {...props}>
      <TextSection title="Tech stack">
        This was a school project we were required to do only with vanilla
        JavaScript and CSS. I included this project as a showcase because it
        demonstrates my proficiency in JavaScript.
      </TextSection>

      <span className="vertical-line"></span>

      <TextSection title="About">
        We were given a JSON with information about Harry Potter characters. The
        data was minimal, we were only given their full name, gender and house.
        I had to "clean" the data by splitting the full name. I fetched their
        blood status (pure, semi blood etc.) from a different JSON. In the live
        demo you can search a certain student, expel them, assign prefect or
        inquisitorials, and if you click the "Slytherin" symbol three times the
        system will be "hacked".
      </TextSection>
    </IndividualProject>
  );
}
