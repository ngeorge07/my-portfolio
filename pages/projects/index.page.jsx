import React from "react";

import ProjectsContainer from "../../components/ProjectsContainer";
import ProjectCard from "../../components/ProjectCard";
import pictureChat from "/robo-chat.png";
import pictureHacked from "/hacked-hogwarts.png";
import pictureAkva from "/akva.png";
import pictureSilfen from "/silfen.png";
import pictureLouisiana from "/louisiana.png";

export { Page };
export const documentProps = {
  title: "George Nicolae-Projects",
};

function Page() {
  return (
    <ProjectsContainer title="My projects">
      <div className="double-side">
        <ProjectCard
          url="/projects/robochat"
          imgPath={pictureChat}
          title="Robo Chat"
        >
          <p>Single page chat application built with React and Firebase</p>
        </ProjectCard>

        <ProjectCard
          url="/projects/hogwarts"
          imgPath={pictureHacked}
          title="Hacked Hogwarts"
        >
          <p>Hogwarts student database build with vanilla JavaScript</p>
        </ProjectCard>

        <ProjectCard
          url="/projects/akva"
          imgPath={pictureAkva}
          title="Akva Jewellery"
        >
          <p>Exam project for a Danish startup that makes jewellery</p>
        </ProjectCard>

        <ProjectCard
          url="/projects/silfen"
          imgPath={pictureSilfen}
          title="Silfen Bags"
        >
          <p>
            Reimagined website for the launch of a new campaign for a Silfen
            Bags
          </p>
        </ProjectCard>

        <ProjectCard
          url="/projects/louisiana"
          imgPath={pictureLouisiana}
          title="Louisiana Museum"
        >
          <p>A new way to explore Louisiana's art collection</p>
        </ProjectCard>
      </div>
    </ProjectsContainer>
  );
}
