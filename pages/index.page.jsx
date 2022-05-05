import React from "react";
import profilePic from "/pictureMe.webp";
import pictureSplitter from "/splitter.webp";
import pictureHacked from "/hacked-hogwarts.webp";

import { Link } from "../components/Link";
import TextSection from "../components/TextSection";
import ProjectCard from "../components/ProjectCard";
import ProjectsContainer from "../components/ProjectsContainer";
import SkillBar from "../components/SkillBar";
import data from "./projects/projects.json";

export { Page };

function Page() {
  return (
    <>
      <section className="intro-section">
        <div>
          <h2>
            Hi, I'm George and I am a multimedia design student specialized in{" "}
            <span className="accent-color">front-end development.</span>
          </h2>

          <Link className="main-button" href="/projects">
            See all my projects
          </Link>
        </div>

        <img src={profilePic} alt="" />
      </section>

      <section className="double-side-text">
        <TextSection title="My skills">
          For the past year I have built several projects using HTML, CSS, as
          well as JavaScript. After I started feeling comfortable working with
          vanilla CSS and Js, I focused on further improving my skills by
          teaching myself to work more efficiently using SASS and React. I am
          looking forward to working using React or any JS framework.
        </TextSection>
        <span className="vertical-line"></span>
        <TextSection title="My process">
          In time, I made my own strategy of debugging to maximize the learning
          process. I start by googling the error to see what's causing it. If
          it's a syntax error I search it on MDN and read the documentation. If
          it's something else I would keep looking for answers online for one
          hour. If I cant't find a solution I would ask a teacher. With this
          approach, even if I don't solve an issue I still learn new valuable
          information.
        </TextSection>
      </section>

      <ProjectsContainer title="Project Showcase">
        <div className="double-side">
          {data.slice(0, 4).map((projectObj) => (
            <ProjectCard
              url={projectObj.url}
              imgPath={projectObj.imgPath}
              title={projectObj.title}
              key={projectObj.id}
            >
              <p>{projectObj.text}</p>
            </ProjectCard>
          ))}
          {/* <ProjectCard
            url="/projects/splitter"
            imgPath={pictureSplitter}
            title="Tip Calculator App"
          >
            <p>
              A calculator that helps you split the bill and calculate the tip.
              Made with React + Tailwind and built with Vite.
            </p>
          </ProjectCard>

          <ProjectCard
            url="/projects/hogwarts"
            imgPath={pictureHacked}
            title="Hacked Hogwarts"
          >
            <p>Hogwarts student database build with vanilla JavaScript.</p>
          </ProjectCard> */}
        </div>

        <Link className="main-button" href="/projects">
          See all my projects
        </Link>
      </ProjectsContainer>

      <section>
        <h3>Skills</h3>
        <div className="skills-section">
          <SkillBar text="HTML" level={95} />
          <SkillBar text="CSS (SASS)" level={85} />
          <SkillBar text="JavaScript" level={90} />
          <SkillBar text="React" level={80} />
          <SkillBar text="Git" level={85} />
          <SkillBar text="Debugging" level={95} />
        </div>
      </section>
    </>
  );
}
