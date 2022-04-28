
function ProjectsContainer({ title, children }) {
  return (
    <section className="project-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default ProjectsContainer;
