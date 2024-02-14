import "./Project.css";
import React, { useEffect, useMemo, useState } from "react";

const Project = ({ project }) => {
  const [pos, setPos] = useState("");

  useEffect(() => {
    setPos(project._id % 2 === 0 ? "right" : "left");
  }, [project]);

  const posClass = useMemo(() => `pos-${pos}`, [pos]);

  return (
    <>
      <div>
        <div className={posClass}>
          {pos === "left" ? (
            <div className="img-container">
              <a href={project.website_url} target="_blank">
                <img
                  className="project-img"
                  src={project.img_url}
                  alt="projects"
                />
              </a>
              <div className="description">
                <h3>{project.name}</h3>
                <p>{project.deploy_at}</p>
                <span className="project-description">{project.content}</span>
              </div>
            </div>
          ) : (
            <div className="img-container">
              <div className="description">
                <h3>{project.name}</h3>
                <p>{project.deploy_at}</p>
                <span className="project-description">{project.content}</span>
              </div>
              <a href={project.website_url} target="_blank">
                <img
                  className="project-img"
                  src={project.img_url}
                  alt="projects"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
