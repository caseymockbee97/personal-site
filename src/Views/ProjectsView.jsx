import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import ProjectComponent from "../Components/ProjectComponent";
import { projectsArr } from "../assets/descriptions";

export default function ProjectsView(props) {
  useEffect(() => {
    props.modifyCurrentView("Projects");
  }, [props]);
  return (
    <Container maxWidth="md">
      {projectsArr.map((project) => (
        <ProjectComponent
          id={project.title}
          title={project.title}
          role={project.role}
          description={project.desc}
          live_URL={project.live_URL}
          github_URL={project.github_URL}
          tech_stack={project.techStack}
          img={project.img}
          disclaimer={project.disclaimer}
        />
      ))}
    </Container>
  );
}
