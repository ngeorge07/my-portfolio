import React from "react";
import TextSection from "../../../components/TextSection";
import IndividualProject from "../../../components/IndividualProject";

import picture from "/louisiana.webp";

export { Page };
export const documentProps = {
  title: "Louisiana-Project",
};

function Page() {
  const props = {
    title: "Louisiana Museum",
    liveLink: "https://georgendesign.com/Module7/07.06.01_louisiana_museum/",
    repoLink: "https://github.com/ngeorge07/07.06.01_louisiana_museum",
    photo: `${picture}`,
  };

  return (
    <IndividualProject {...props}>
      <TextSection title="Tech stack">
        This project was built with vanilla JavaScript and SASS. I used RestDB
        to store and fetch data and the Barba library to create animations
        between pages.
      </TextSection>

      <span className="vertical-line"></span>

      <TextSection title="About">
        The Louisiana Art Museum asked for a digital solution to display their
        artworks. I used Barba.js to create a sliding animation between pages to
        make the user feel like they are walking from one room into another.
      </TextSection>
    </IndividualProject>
  );
}
