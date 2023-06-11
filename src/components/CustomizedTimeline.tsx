import * as React from "react";

//images
import becks from "../images/becks.jpg";
import asu from "../images/asu.jpg";
import aurora from "../images/aurora.jpg";

//timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { Avatar } from "@mui/material";

//components
import BecksCard from "./BecksCard";
import AuroraCard from "./AuroraCard";
import ASUCard from "./ASUCard";

import Typography from "@mui/material/Typography";

const CustomizedTimeline = () => {
  return (
    <Timeline position="right" >
      <TimelineItem sx={{display: 'flex', justifyContent:'flex-start'}}>
        {/* <TimelineOppositeContent
          sx={{ m: "auto 0", fontSize: 24 }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Typography
            sx={{ fontSize: 36, fontFamily: "Saira Extra Condensed" }}
            color="#c55911"
            gutterBottom
          >
            Spring '23
          </Typography>
        </TimelineOppositeContent> */}
        <TimelineSeparator>
          <TimelineConnector sx={{ backgroundColor: "#c55911" }} />
          <TimelineDot sx={{backgroundColor: '#c55911', border: '.1px'}}>
            <Avatar
              alt="Remy Sharp"
              src={becks}
              sx={{ width: 64, height: 64 }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: "#c55911" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <BecksCard></BecksCard>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontSize: 24 }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Typography
            sx={{ fontSize: 36, fontFamily: "Saira Extra Condensed" }}
            color="#c55911"
            gutterBottom
          >
            Summer '22
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ backgroundColor: "#c55911" }} />
          <TimelineDot sx={{backgroundColor: '#c55911', border: '.1px'}}>
            <Avatar alt="Remy Sharp" src={asu} sx={{ width: 64, height: 64 }} />
          </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: "#c55911" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <ASUCard></ASUCard>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontSize: 24 }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Typography
            sx={{ fontSize: 36, fontFamily: "Saira Extra Condensed" }}
            color="#c55911"
            gutterBottom
          >
            Winter '19, Spring '20
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ backgroundColor: "#c55911" }} />
          <TimelineDot sx={{backgroundColor: '#c55911', border: '.1px'}}>
            <Avatar
              alt="Remy Sharp"
              src={aurora}
              sx={{ width: 64, height: 64 }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: "#c55911" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <AuroraCard></AuroraCard>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CustomizedTimeline;
