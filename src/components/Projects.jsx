import "./Projects.css";
import Project from "./Project.jsx";
import projects from "../assets/project";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h2>Project</h2>
        <p>Our journey in this tech just started from now </p>
      </div>

      {projects.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
