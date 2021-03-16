import React from "react";
import styled from "styled-components";
import { Project } from "../model/Project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <StyledProjectCard className="project-card">
      {project.thumbnail ? (
        <img
          className="thumbnail"
          src={project.thumbnail}
          alt={"An image displaying " + project.name}
        />
      ) : null}
      {project.url ? (
        <a className="url" href={project.url} target="_blank" rel="noreferrer">
          Take me to the project!
        </a>
      ) : null}
      <h3 className="heading">{project.name}</h3>
      <p className="description">{project.description}</p>
    </StyledProjectCard>
  );
};

const StyledProjectCard = styled.div`
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1 0 31.333333%;
  max-width: 500px;
  height: 700px;

  .url {
    margin: 10px 0 10px 0;
    align-self: center;
  }

  .thumbnail {
    height: 225px;
    align-self: center;
  }

  .description {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
