import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techItem =technologies.map((tech) => {
    return <span>{tech.name}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techItem}
      </div>
    </div>
  );
}

export default ProjectItem;
