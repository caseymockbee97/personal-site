import React, { useEffect } from "react";
import { Container, makeStyles, Card, Typography } from "@material-ui/core";
import ProjectComponent from "../Components/ProjectComponent";
import { projectsArr } from "../assets/descriptions";
import clsx from "clsx";
const minWidth = "300px";
const maxWidth = "800px";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    minWidth: minWidth,
    maxWidth: maxWidth,
    margin: "5px auto",
    backgroundColor: "rgba(255, 255, 255, .2)",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  margin: {
    marginBottom: "5px",
    marginTop: "5px",
  },
}));

export default function ProjectsView(props) {
  useEffect(() => {
    props.modifyCurrentView("Projects");
  }, [props]);

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Card className={clsx(classes.cardStyle, classes.root)}>
        <Typography
          align="center"
          variant="h4"
          className={classes.margin}
          component="h2"
        >
          Projects
        </Typography>
      </Card>
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
          classes={classes}
        />
      ))}
    </Container>
  );
}
