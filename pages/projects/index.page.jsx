import React, { useEffect } from "react";

import ProjectsContainer from "../../components/ProjectsContainer";
import ProjectCard from "../../components/ProjectCard";
import pictureChat from "/robo-chat.webp";
import pictureHacked from "/hacked-hogwarts.webp";
import pictureAkva from "/akva.webp";
import pictureSilfen from "/silfen.webp";
import pictureLouisiana from "/louisiana.webp";

export { Page };
export const documentProps = {
  title: "George Nicolae-Projects",
};

const data = [
  {
    id: 0,
    url: "/projects/robochat",
    imgPath: pictureChat,
    title: "Robo Chat",
    text: "Single page chat application built with React and Firebase",
  },
  {
    id: 1,
    url: "/projects/hogwarts",
    imgPath: pictureHacked,
    title: "Hacked Hogwarts",
    text: "Hogwarts student database build with vanilla JavaScript",
  },
  {
    id: 2,
    url: "/projects/akva",
    imgPath: pictureAkva,
    title: "Akva Jewellery",
    text: "Exam project for a Danish startup that makes jewellery",
  },
  {
    id: 3,
    url: "/projects/silfen",
    imgPath: pictureSilfen,
    title: "Silfen Bags",
    text: "Reimagined website for the launch of a new campaign for a Silfen Studios",
  },
  {
    id: 4,
    url: "/projects/louisiana",
    imgPath: pictureLouisiana,
    title: "Louisiana Museum",
    text: "A new way to explore Louisiana's art collection",
  },
];

function Page() {
  return (
    <ProjectsContainer title="My projects">
      <div className="double-side">
        {data.map((projectObj) => (
          <ProjectCard
            url={projectObj.url}
            imgPath={projectObj.imgPath}
            title={projectObj.title}
            key={projectObj.id}
          >
            <p>{projectObj.text}</p>
          </ProjectCard>
        ))}
      </div>
    </ProjectsContainer>
  );
}
