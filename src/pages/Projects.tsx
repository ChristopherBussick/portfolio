import React from "react";
import styled from "styled-components";
import { ProjectCard } from "../components/ProjectCard";
import { Project } from "../model/Project";

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <StyledProjects>
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.id} />;
      })}
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  flex: 1 1 auto;
  display: flex;
  padding: 25px 25px;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
  align-items: center;

  /* .project-card:not(:last-child) {
    margin: 0 35px 0px 0;
  } */
`;
