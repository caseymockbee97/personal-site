import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  noStyle: {
    textDecoration: "inherit",
    color: "inherit",
    cursor: "auto",
  },
  listItem: {
    background: "rgba(255, 255, 255, .2)",
  },
}));

export default function SideBarContentsComponent(props) {
  const classes = useStyles();

  return (
    <div className={props.classes.drawerContainer}>
      <List>
        <Link to="/" className={classes.noStyle}>
          <ListItem
            button
            className={classes.listItem}
            selected={props.currentView === "About"}
          >
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"About"}></ListItemText>
          </ListItem>
        </Link>
        <Link to="/projects" className={classes.noStyle}>
          <ListItem
            button
            className={classes.listItem}
            selected={props.currentView === "Projects"}
          >
            <ListItemIcon>
              <WorkOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={"Projects"} />
          </ListItem>
        </Link>
        <Link to="/resume" className={classes.noStyle}>
          <ListItem
            button
            className={classes.listItem}
            selected={props.currentView === "Resume"}
          >
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={"Resume"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
