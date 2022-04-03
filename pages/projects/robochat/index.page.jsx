import React from "react";
import TextSection from "../../../components/TextSection";
import IndividualProject from "../../../components/IndividualProject";

import picture from "/robo-chat.webp";

export { Page };
export const documentProps = {
  title: "Robo-Chat-Project",
};

function Page() {
  const props = {
    title: "Robo Chat",
    liveLink: "https://robo-chat.netlify.app/",
    repoLink: "https://github.com/ngeorge07/chatty-app",
    photo: `${picture}`,
  };

  return (
    <IndividualProject {...props}>
      <TextSection title="Tech stack">
        <p>
          In this project I used React and Firebase. I wrote the Firebase
          initialization as a function in JS. The styling was done with SASS and
          I used Vite as the build tool.
        </p>
      </TextSection>

      <span className="vertical-line"></span>

      <TextSection title="About">
        <p>
          This was a personal project. I've been looking into making a CRUD app
          for a while and I saw this <a href="#">tutorial</a> that gave me a
          good starting point. I implemented a way fo loged in user to delete
          their sent messages. Also, each user can up or down vote any message
          thus updating the Firestore database. The UI will update and the UID
          of that user will be added in an array for that message to show that
          they already voted on that specific message.
        </p>
      </TextSection>
    </IndividualProject>
  );
}
