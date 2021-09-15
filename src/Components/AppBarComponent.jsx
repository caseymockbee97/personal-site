import React from "react";
import { Typography, Toolbar, AppBar } from "@material-ui/core";

export default function AppBarComponent(props) {
  const classes = props.classes;
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h3"
          noWrap
          align="center"
          className={classes.header}
          component="h1"
        >
          Casey Mockbee
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
