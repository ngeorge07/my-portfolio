import React from "react";
import TextSection from "../../../components/TextSection";
import { Link } from "../../../components/Link";
import { FaExternalLinkAlt } from "react-icons/fa";
import pictureChat from "/robo-chat.png";

export { Page };
export const documentProps = {
  title: "Robo Chat",
};

function Page() {
  return (
    <>
      <section className="project-intro">
        <div className="project-links">
          <Link className="project-away-link" href="/projects">
            Live demo
            <FaExternalLinkAlt />
          </Link>
          <Link className="project-away-link" href="/projects">
            GitHub repo
            <FaExternalLinkAlt />
          </Link>
        </div>

        <img src={pictureChat} alt="" />
      </section>

      <section className="double-side-text">
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
    </>
  );
}
