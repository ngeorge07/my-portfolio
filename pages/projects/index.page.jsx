import React from "react";

import ProjectsContainer from "../../components/ProjectsContainer";
import ProjectCard from "../../components/ProjectCard";
import pictureChat from "/robo-chat.png";
import pictureHacked from "/hacked-hogwarts.png";

export { Page };
export const documentProps = {
  title: "Projects",
};

function Page() {
  return (
    <main>
      <ProjectsContainer title="My projects">
        <div className="double-side">
          <ProjectCard url="/" imgPath={pictureChat} title="Robo Chat">
            <p>Single page chat application built with React and Firebase.</p>
          </ProjectCard>

          <ProjectCard url="/" imgPath={pictureHacked} title="Hacked Hogwarts">
            <p>Hogwarts student database build with vanilla JavaScript.</p>
          </ProjectCard>

          <ProjectCard url="/" imgPath={pictureHacked} title="Hacked Hogwarts">
            <p>Hogwarts student database build with vanilla JavaScript.</p>
          </ProjectCard>

          <ProjectCard url="/" imgPath={pictureHacked} title="Hacked Hogwarts">
            <p>Hogwarts student database build with vanilla JavaScript.</p>
          </ProjectCard>

          <ProjectCard url="/" imgPath={pictureHacked} title="Hacked Hogwarts">
            <p>Hogwarts student database build with vanilla JavaScript.</p>
          </ProjectCard>

          <ProjectCard url="/" imgPath={pictureHacked} title="Hacked Hogwarts">
            <p>Hogwarts student database build with vanilla JavaScript.</p>
          </ProjectCard>
        </div>
      </ProjectsContainer>
    </main>
  );
}
