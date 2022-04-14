import React from "react";
import TextSection from "../../../components/TextSection";
import IndividualProject from "../../../components/IndividualProject";

import picture from "/silfen.webp";

export { Page };
export const documentProps = {
  title: "Silfen-Project",
};

function Page() {
  const props = {
    title: "Silfen Bags",
    liveLink: "https://ngeorge07.github.io/SILFEN-website/",
    repoLink: "https://github.com/ngeorge07/SILFEN-website",
    photo: `${picture}`,
  };

  return (
    <IndividualProject {...props}>
      <TextSection title="Tech stack">
        For this website I used the Pods WordPress REST API to fetch data about
        products and made a dynamic product page based on each item's ID.
      </TextSection>

      <span className="vertical-line"></span>

      <TextSection title="About">
        SILFEN Studios wanted us to make a new website for the launch of their
        new launch.
      </TextSection>
    </IndividualProject>
  );
}
