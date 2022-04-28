import { Link } from "./Link";

function ProjectCard({ imgPath, url, title, children }) {
  return (
    <Link className="card-a" href={url}>
      <img className="card-image" src={imgPath} alt="" />
      <h4>{title}</h4>
      {children}
    </Link>
  );
}

export default ProjectCard;
