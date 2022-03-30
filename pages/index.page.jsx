import React from "react";
import profilePic from "/pictureMe.jpeg";
import pictureChat from "/robo-chat.png";
import pictureHacked from "/hacked-hogwarts.png";

import { Link } from "../components/Link";
import TextSection from "../components/TextSection";
import ProjectCard from "../components/ProjectCard";

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

      <section className="double-side">
        <TextSection title="My skills">
          <p>
            For the past year I've build projects using HTML, CSS and
            JavaScript. After I felt more than comfortable working with vanilla
            CSS and Js I went further and thought myself how to work more
            efficiently using <span className="accent-color"> SASS</span> and
            <span className="accent-color"> React</span>. I would like to work
            using React or any JS
            <span className="accent-color"> framework</span>.
          </p>
        </TextSection>
        <span className="vertical-line"></span>
        <TextSection title="My process">
          <p>
            In time, I made my own strategy of debugging to
            <span className="accent-color"> maximize</span> the learning
            process. I start by googling the error to see what's causing it. If
            it's a syntax error I search it on
            <span className="accent-color"> MDN</span> and read the
            documentation. If it's something else I would keep looking for
            answers online for one hour. If I cant't find a solution I would ask
            a teacher. With this approach, even if I don't solve an issue I
            still learn new valuable information.
          </p>
        </TextSection>
      </section>

      <section className="project-section">
        <h3>Project Showcase</h3>
        <div className="double-side">
          <ProjectCard url="/" imgPath={pictureChat} title="Robo Chat">
            <p>Single page chat application built with React and Firebase.</p>
          </ProjectCard>

          <ProjectCard url="/" imgPath={pictureHacked} title="Hacked Hogwarts">
            <p>Hogwarts student database build with vanilla JavaScript.</p>
          </ProjectCard>
        </div>

        <Link className="main-button" href="/projects">
          See my projects
        </Link>
      </section>
    </>
  );
}
