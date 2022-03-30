import React from "react";
import TextSection from "../../../components/TextSection";
import IndividualProject from "../../../components/IndividualProject";

import picture from "/louisiana.png";

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
        <p>
          For the past year I've build projects using HTML, CSS and JavaScript.
          After I felt more than comfortable working with vanilla CSS and Js I
          went further and thought myself how to work more efficiently using
          SASS and React. I would like to work using React or any JS framework.
        </p>
      </TextSection>

      <span className="vertical-line"></span>

      <TextSection title="About">
        <p>
          In time, I made my own strategy of debugging to maximize the learning
          process. I start by googling the error to see what's causing it. If
          it's a syntax error I search it on MDN and read the documentation. If
          it's something else I would keep looking for answers online for one
          hour. If I cant't find a solution I would ask a teacher. With this
          approach, even if I don't solve an issue I still learn new valuable
          information.
        </p>
      </TextSection>
    </IndividualProject>
  );
}
