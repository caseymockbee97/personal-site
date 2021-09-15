import React from "react";
import { Toolbar, Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import ResumeView from "./ResumeView";
import AboutView from "./AboutView";
import ProjectsView from "./ProjectsView";

export default function ContentView(props) {
  const modifyCurrentView = props.modifyCurrentView;
  return (
    <Container>
      <Toolbar />
      <Switch>
        <Route exact path="/resume">
          <ResumeView modifyCurrentView={modifyCurrentView} />
        </Route>
        <Route exact path="/projects">
          <ProjectsView modifyCurrentView={modifyCurrentView} />
        </Route>
        <Route exact path="/">
          <AboutView modifyCurrentView={modifyCurrentView} />
        </Route>
      </Switch>
    </Container>
  );
}
