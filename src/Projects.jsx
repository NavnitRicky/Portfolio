import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './style/Projects.css';

const Projects = ({ projects, onPreview }) => (
  <section id="projects" className="projects-section">
    <div className="container">
      <div className="projects-header">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">Some of my recent work</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <button className="btn btn-primary" onClick={() => onPreview && onPreview(project.liveUrl)}>
                  <ExternalLink size={16} />
                  Live Demo
                </button>
                <button className="btn btn-secondary" onClick={() => onPreview && onPreview(project.githubUrl)}>
                  <Github size={16} />
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 