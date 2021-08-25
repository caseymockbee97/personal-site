import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Typography, Toolbar, AppBar, Drawer, IconButton, useScrollTrigger, Slide, Container, Box, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarContentsComponent from '../Components/SidebarComponet';
import ResumeView from './ResumeView';
import { Route, Switch } from 'react-router-dom';
import AboutView from './AboutView';

const drawerWidth = 240;

const HideOnScroll = (props) => {
    const children = props.children;

    const trigger = useScrollTrigger()

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
} 

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: "#333232"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: "auto",
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      title: {
          flexGrow: 1
      },
      backgroundColor: {
          background: "#333232"
      }
  }));
  
export default function MainView() {
    const classes = useStyles()
    const [showingDrawer, setShowingDrawer] = useState(false)
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <HideOnScroll >
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setShowingDrawer((prev) => !prev)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h3" noWrap align='center' className={classes.title}>
                            Casey Mockbee
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            {showingDrawer && <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                color="primary"
            >
                <Toolbar />
                <SideBarContentsComponent classes={classes} />
            </Drawer>}       
            <Container>
                <Toolbar/>
                <Switch>
                    <Route exact path="/resume">
                        <ResumeView />   
                    </Route>
                    <Route exact path="/">
                        <AboutView />   
                    </Route>
                </Switch>
            </Container>  
        </div>
    )
}
