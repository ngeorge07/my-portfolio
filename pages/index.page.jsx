import React from "react";
import profilePic from "/pictureMe.jpeg";
import { Link } from "../components/Link";

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
    </>
  );
}
