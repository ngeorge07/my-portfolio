import React from "react";
import profilePic from "/pictureMe.jpeg";
import { Link } from "../components/Link";
import TextSection from "../components/TextSection";

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

      <TextSection title="Who am I?">
        <p>
          During this theme I sharpened my CSS skills and got introduced to
          landing pages, color theory and animations using GSAP. During this
          theme we were tasked with creating this landing page using the skills
          learned by completing smaller projects. Personally, the colors
          assignment was the most useful because I struggle with choosing a
          color pallette and the 60-30-10 rule gave me some structure.
        </p>
      </TextSection>
    </>
  );
}
