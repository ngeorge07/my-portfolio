import React, { useEffect } from "react";

import ProjectsContainer from "../../components/ProjectsContainer";
import ProjectCard from "../../components/ProjectCard";

import data from "./projects.json";

export { Page };
export const documentProps = {
  title: "George Nicolae-Projects",
};

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
