import React from "react";
import { Link } from "./Link";
import { FaExternalLinkAlt } from "react-icons/fa";

function IndividualProject({ children, liveLink, repoLink, photo, title }) {
  return (
    <>
      <section className="project-intro">
        <div className="project-links">
          <Link className="project-away-link" href={liveLink} target="_blank">
            Live demo
            <FaExternalLinkAlt />
          </Link>
          <Link className="project-away-link" href={repoLink} target="_blank">
            GitHub repo
            <FaExternalLinkAlt />
          </Link>
        </div>

        <img src={photo} alt="" />
      </section>

      <h2 className="project-title">{title}</h2>

      <section className="double-side-text">{children}</section>
    </>
  );
}

export default IndividualProject;
