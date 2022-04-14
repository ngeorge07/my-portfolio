import React from "react";
import profilePic from "/pictureMe.webp";
import pictureChat from "/robo-chat.webp";
import pictureHacked from "/hacked-hogwarts.webp";

import { Link } from "../components/Link";
import TextSection from "../components/TextSection";
import ProjectCard from "../components/ProjectCard";
import ProjectsContainer from "../components/ProjectsContainer";

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
            See my projects
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
          <ProjectCard
            url="/projects/robochat"
            imgPath={pictureChat}
            title="Robo Chat"
          >
            <p>Single page chat application built with React and Firebase.</p>
          </ProjectCard>

          <ProjectCard
            url="/projects/hogwarts"
            imgPath={pictureHacked}
            title="Hacked Hogwarts"
          >
            <p>Hogwarts student database build with vanilla JavaScript.</p>
          </ProjectCard>
        </div>

        <Link className="main-button" href="/projects">
          See my projects
        </Link>
      </ProjectsContainer>
    </>
  );
}
