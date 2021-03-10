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
        return <ProjectCard project={project} />;
      })}
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  flex: 1 1 auto;
  display: flex;
  padding: 125px 125px;

  .project-card:not(:last-child) {
    margin-right: 35px;
  }
`;
