import React from "react";
import TextSection from "../../../components/TextSection";
import picture from "/akva.webp";
import IndividualProject from "../../../components/IndividualProject";

export { Page };
export const documentProps = {
  title: "Akva-Project",
};

function Page() {
  const props = {
    title: "Akva Exam Project",
    liveLink: "https://ngeorge07.github.io/akva-exam-improvements/",
    repoLink: "https://github.com/ngeorge07/akva-exam-improvements",
    photo: `${picture}`,
  };

  return (
    <IndividualProject {...props}>
      <TextSection title="Tech stack">
        This project was done with vanilla JavaScript and CSS. I used the
        vanillajs-datepicker library in order to get a functional calendar input
        for the appointment form. I used the Basin API in order to store the
        appointment information and update the available dates and hours.
      </TextSection>

      <span className="vertical-line"></span>

      <TextSection title="About">
        This is the exam project from my second semester. I learned how to work
        with GitHub branches since one of my colleagues did the code for the
        header and the "consciousness" page. I built a functional appointment
        form that will send data to the Basin API when completed. At the same
        time, it receives the times and dates that are already occupied and
        removes them as an option on the client's side. For this project I also
        used dynamic fetching in order to filter Akva's products.
      </TextSection>
    </IndividualProject>
  );
}
