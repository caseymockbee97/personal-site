import {
  Card,
  makeStyles,
  Typography,
  Button,
  ButtonGroup,
  List,
  ListItem,
  Collapse,
} from "@material-ui/core";
import clsx from "clsx";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";

const minWidth = "300px";
const maxWidth = "800px";

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "95%",
  },
  image: {
    borderRadius: "5px",
  },
  marginBottom: {
    marginBottom: "5px",
  },
  marginTop: {
    marginTop: "5px",
  },
  buttonWidth: {
    width: "250px",
  },
  pointer: {
    cursor: "pointer",
  },
}));

export default function ProjectComponent(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Card className={clsx(props.classes.cardStyle, props.classes.root)}>
      <Typography
        align="center"
        variant="h4"
        className={clsx(classes.marginTop, classes.marginBottom)}
        component="h3"
      >
        {props.title}
      </Typography>
      <div className={classes.marginBottom}>
        <ButtonGroup>
          <Button
            variant="outlined"
            rel="noreferrer"
            target="_blank"
            href={props.live_URL}
          >
            View Project
            <OpenInNewIcon fontSize="small" />
          </Button>
          <Button
            variant="outlined"
            rel="noreferrer"
            target="_blank"
            href={props.github_URL}
          >
            GitHub
            <OpenInNewIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <Typography className={classes.buttonWidth} variant="caption">
        {props.disclaimer}
      </Typography>
      <img
        className={clsx(classes.fullWidth, classes.image, classes.marginBottom)}
        alt="Screenshot of Application"
        src={props.img}
      />
      <List>
        <Typography
          variant="h5"
          align="center"
          className={[classes.fullWidth, classes.pointer]}
          noWrap
          component="h4"
        >
          <ListItem onClick={handleClick}>
            Tech Stack {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </Typography>
        <Collapse in={isOpen}>
          <Typography align="center" className={classes.fullWidth}>
            {props.tech_stack.map((item) => (
              <ListItem id={item}>{item}</ListItem>
            ))}
          </Typography>
        </Collapse>
      </List>
      <Typography
        align="left"
        className={clsx(classes.fullWidth, classes.marginBottom)}
      >
        {props.description}{" "}
      </Typography>
    </Card>
  );
}
