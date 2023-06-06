import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import becks from "./becks.jpg";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

// icons
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import LinkIcon from "@mui/icons-material/Link";

import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

//lists
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import data from "./resumeContents";

const experience = [<React.Fragment>1</React.Fragment>,<React.Fragment>2</React.Fragment>];

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
        {data.experience.title[0]}
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Jan 2023 - May 2023
        {experience[0]}
      </Typography>

      <Typography variant="body2">
            {data.experience.description[0]}
      </Typography>
    </CardContent>

    <CardActions>
      <Button size="small">
        <LinkIcon></LinkIcon>
      </Button>
    </CardActions>
  </React.Fragment>
);

function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 500 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
function CustomizedTimeline() {
  return (
    <Timeline position="right">
      {/* Becks */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Spring 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <Avatar alt="Remy Sharp" src={becks} sx={{ width: 128, height: 128 }}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          {/* <Typography variant="h6" component="span">
            Machine Learning Research Intern
          </Typography>
          <Typography>Because you need strength</Typography> */}
          <OutlinedCard></OutlinedCard>
        </TimelineContent>
      </TimelineItem>

      {/* Mathematics Research */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Spring 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent>
          What is this do
          <Typography>What happens here</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <CustomizedTimeline></CustomizedTimeline>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
