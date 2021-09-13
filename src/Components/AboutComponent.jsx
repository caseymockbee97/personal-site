import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import profilePicture from "../assets/DeathValleyPortrait.jpg";
const tab = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

export default function AboutComponent(props) {
  let classes = props.classes;
  return (
    <>
      <Card className={clsx(classes.cardStyle, classes.root)}>
        <img
          src={profilePicture}
          alt="Casey Mockbee in Yellowstone National Park"
          className={clsx(classes.img, classes.marginTop)}
        />
        <Typography
          align="center"
          className={classes.marginBottom}
          variant="caption"
        >
          Casey Mockbee
        </Typography>
        {/* <img
          src="https://www.codewars.com/users/caseymockbee97/badges/large"
          alt="codewars badge"
        /> */}
        <div className={classes.textBox}>
          <Typography
            align="left"
            className={classes.marginBottom}
            variant="body2"
          >
            {tab}I am a full-stack software engineering student seeking
            employment as a software developer. I am well versed in Javascript,
            Python, Git, and React. I have experience working with Node.js and
            Django. I'm also eager to learn new skills and languages. During my
            time at Kenzie Academy I have completed projects on my own as well
            as in teams. When working in teams we utilized Scrum Teams in which
            I have filled the roles of Product Owner and Scrum Master.
          </Typography>
          <Typography align="left" className={classes.marginTop} variant="h6">
            Technical Skills
          </Typography>
          <Typography
            align="left"
            className={classes.marginBottom}
            variant="body2"
          >
            <List>
              <ListItem>{"JavaScript ES6 (intermediate/proficient)"}</ListItem>
              <ListItem>{"React (intermediate/proficient)"}</ListItem>
              <ListItem>{"Python 3 (intermediate/proficient)"}</ListItem>
              <ListItem>{"Django (intermediate)"}</ListItem>
              <ListItem>{"HTML5 (intermediate/proficient)"}</ListItem>
              <ListItem>{"CSS3 (intermediate/proficient)"}</ListItem>
              <ListItem>{"Swift + SwiftUI (basic)"}</ListItem>
            </List>
          </Typography>
          <Typography align="left" className={classes.marginTop} variant="h6">
            Education
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Typography align="left" variant="subtitle1">
                    Kenzie Academy
                  </Typography>
                }
                secondary={
                  <>
                    <Typography align="left" variant="body2">
                      {"Front-End Web Development Certification (Apr 2021)"}
                      <br />
                      {"Full-Stack Web Development Certification (Oct 2021)"}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography align="left" variant="subtitle1">
                    Purdue University
                  </Typography>
                }
                secondary={
                  <>
                    <Typography align="left" variant="body2">
                      {"Hospitality and Tourism Management (B.S) (May 2020)"}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
          {/* <Typography align="left" variant="h6">
            Hospitality -&gt; Tech
          </Typography>
          <Typography
            align="left"
            className={classes.marginBottom}
            variant="body2"
          >
            {tab}After graduating from Purdue University in 2020 with a
            bachelors in Hospitality and Tourism Management I had a lot to
            figure out. 
          </Typography> */}
        </div>
      </Card>
    </>
  );
}
