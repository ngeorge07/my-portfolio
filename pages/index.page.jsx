import React from "react";
import profilePic from "/pictureMe.webp";

import { Link } from "../components/Link";
import TextSection from "../components/TextSection";
import ProjectCard from "../components/ProjectCard";
import ProjectsContainer from "../components/ProjectsContainer";
import Skill from "../components/Skill";
import data from "./projects/projects.json";

export { Page };

function Page() {
	return (
		<>
			<section className="intro-section">
				<div>
					<h2>
						Hi, I'm George and I am a{" "}
						<span className="accent-color">front-end developer</span> with a
						multimedia design background.
					</h2>

					<Link className="main-button" href="/projects">
						See all my projects
					</Link>
				</div>

				<img src={profilePic} alt="" />
			</section>

			<section className="double-side-text">
				<TextSection title="My skills">
					I am an accomplished developer with extensive experience in JavaScript
					frameworks like React and <span className="accent-color">Next</span>,
					and styling libraries such as{" "}
					<span className="accent-color">Tailwind</span> and ChakraUI. My coding
					practices prioritize clean, safe, and scalable code, and I work with
					BaaS products like Firebase and{" "}
					<span className="accent-color">Supabase</span> for seamless backend
					integration. I am dedicated to continuous learning to deliver
					high-quality solutions that meet client business objectives. Check my{" "}
					<a
						href="https://github.com/ngeorge07"
						target="_blank"
						className="inline-link">
						GitHub
					</a>{" "}
					profile pinned projects for a display of my skills.
				</TextSection>
				<span className="vertical-line"></span>
				<TextSection title="My experience">
					I am an skilled front-end developer with a strong track record of
					delivering solutions. I recently graduated with top honors from KEA -
					Copenhagen School of Design and Development with an AP degree in
					Multimedia Design. I possess a keen eye for good UI/UX layouts and a
					good understanding of web design principles. Currently, I work as a
					full-time developer at{" "}
					<a
						href="https://www.tinyrhino.dk/"
						target="_blank"
						className="inline-link">
						TinyRhino
					</a>{" "}
					, where I develop both web and native applications using React and
					React Native. My strong analytical and problem-solving skills enable
					me to deliver high-quality solutions within tight deadlines, while
					maintaining a strong focus on client satisfaction.
				</TextSection>
			</section>

			<ProjectsContainer title="Project Showcase">
				<div className="double-side">
					{data.slice(0, 4).map((projectObj) => (
						<ProjectCard
							url={projectObj.url}
							imgPath={projectObj.imgPath}
							title={projectObj.title}
							key={projectObj.id}>
							<p>{projectObj.text}</p>
						</ProjectCard>
					))}
				</div>

				<Link className="main-button" href="/projects">
					See all my projects
				</Link>
			</ProjectsContainer>

			<section>
				<h3>Tech I work with</h3>
				<div className="skills-section">
					<Skill imgUrl={"/skills/html.svg"} caption="HTML" />
					<Skill imgUrl={"/skills/css.svg"} caption="CSS" />
					<Skill imgUrl={"/skills/sass.svg"} caption="SASS" />
					<Skill imgUrl={"/skills/js.svg"} caption="JavaScript" />
					<Skill imgUrl={"/skills/react.svg"} caption="React" />
					<Skill imgUrl={"/skills/tailwind.svg"} caption="Tailwind" />
					<Skill imgUrl={"/skills/git.svg"} caption="Git" />
				</div>
			</section>
		</>
	);
}
