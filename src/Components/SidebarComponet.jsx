import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  noStyle: {
    textDecoration: "inherit",
    color: "inherit",
    cursor: "auto",
  },
  listItem: {
      backgroundColor: "#333232"
  }
}));

export default function SideBarContentsComponent(props) {
  const classes = useStyles();

  return (
    <div className={props.classes.drawerContainer}>
      <List>
        <Link to="/" className={classes.noStyle}>
          <ListItem button>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"About"}></ListItemText>
          </ListItem>
        </Link>
        <Link to="/resume" className={classes.noStyle}>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Resume"} />
          </ListItem>
        </Link>
        <Link to="/main/saved" className={classes.noStyle}>
          <ListItem button>
            <ListItemIcon>
              <BookmarksOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Saved"} />
          </ListItem>
        </Link>
        <Link to="/main/create" className={classes.noStyle}>
          <ListItem button>
            <ListItemIcon>
              <AddBoxOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Create"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
