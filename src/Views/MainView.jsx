import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Typography,
  Toolbar,
  AppBar,
  Drawer,
  Container,
} from "@material-ui/core";
import SideBarContentsComponent from "../Components/SidebarComponet";
import ResumeView from "./ResumeView";
import { Route, Switch } from "react-router-dom";
import AboutView from "./AboutView";
import ProjectsView from "./ProjectsView";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100vh",
    background: "linear-gradient(#637081, #CEE5F2)",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    width: drawerWidth,
  },
  header: {
    // width: `calc(100vw - ${drawerWidth}px)`,
    marginLeft: drawerWidth - 16,
    width: `calc(100vw -  ${drawerWidth - 16}px)`,
  },
  backgroundColor: {
    background: "#333232",
  },
}));

export default function MainView() {
  const classes = useStyles();
  const [currentView, setCurrentView] = useState("About");

  const modifyCurrentView = (title) => {
    setCurrentView(title);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h3"
            noWrap
            align="center"
            className={classes.header}
          >
            Casey Mockbee
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        color="primary"
      >
        <Toolbar />
        <SideBarContentsComponent classes={classes} currentView={currentView} />
      </Drawer>
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
    </div>
  );
}
