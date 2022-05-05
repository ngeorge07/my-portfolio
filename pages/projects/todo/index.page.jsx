import TextSection from "../../../components/TextSection";
import IndividualProject from "../../../components/IndividualProject";

import picture from "/todolist.webp";

export { Page };
export const documentProps = {
  title: "To-Do-List",
};

function Page() {
  const props = {
    title: "To-Do-list",
    liveLink: "https://to-do-list-firestore.netlify.app/",
    repoLink: "https://github.com/ngeorge07/to-do-list/tree/main",
    photo: `${picture}`,
  };

  return (
    <IndividualProject {...props}>
      <TextSection title="Tech stack">
        I used React for functionality and the ChakraUI component library for
        styling. I hooked it up to a Firestore Database to make it a full CRUD
        app.
      </TextSection>

      <span className="vertical-line"></span>

      <TextSection title="About">
        I wanted to work more with ChakraUI and Firestore. I love the design of
        Chakra's components and how easy it is to implement a light/dark mode.
        Firestore has amazing documentation and makes it very easy to read,
        update and delete data from the database.
      </TextSection>
    </IndividualProject>
  );
}
