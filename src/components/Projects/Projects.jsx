import { projectsConfig } from "@/config/config";
import { SquareArrowOutUpRight } from "lucide-react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <p>Here are some of my projects:</p>

      {/* Project items would go here */}
      {projectsConfig.map((project) => (
        <div key={project.id} className="project-item">
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {project.skills && (
            <div className="project-skills">
              {project.skills.map((skill, index) => (
                <span key={index} className="project-skill">
                  {skill}
                </span>
              ))}
            </div>
          )}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <SquareArrowOutUpRight />
            Preview
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
