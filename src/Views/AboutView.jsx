import {
  Card,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useEffect } from "react";
import profilePicture from "../assets/DeathValleyPortrait.jpg";
import AboutComponent from "../Components/AboutComponent";

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
  marginBottom: {
    marginBottom: "5px",
  },
  marginTop: {
    marginTop: "5px",
  },
  img: {
    width: "200px",
    borderRadius: "5px",
  },
  textBox: {
    width: "95%",
  },
}));

export default function AboutView(props) {
  const classes = useStyles();

  useEffect(() => {
    props.modifyCurrentView("About");
  }, [props]);

  return (
    <Container maxWidth="md">
      <Card className={clsx(classes.cardStyle, classes.root)}>
        <Typography
          align="center"
          variant="h3"
          className={clsx(classes.marginTop, classes.marginBottom)}
        >
          About Me
        </Typography>
      </Card>
      <AboutComponent classes={classes} />
    </Container>
  );
}
