import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

//components
import BecksCard from "./BecksCard";
import AuroraCard from "./AuroraCard";
import ASUCard from "./ASUCard";
import EducationCard from "./EducationCard";

import profile from "../images/profile-linkedin-avatar.jpg";
import { TimelineDot } from "@mui/lab";

// import '../../global.css'
// import "@fontsource/saira-extra-condensed/600.css";
// import "@fontsource/mulish/700.css";

const drawerWidth = 300;

const ResponsiveDrawer = () => {
  const drawer = (
    <Box>
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <TimelineDot
          sx={{ backgroundColor: "#f09f5d", border: 8, borderColor: "#f09f5d" }}
        >
          <Avatar
            alt="Remy Sharp"
            src={profile}
            sx={{ width: 156, height: 156 }}
          />
        </TimelineDot>
      </Box>

      <Typography
        sx={{
          fontFamily: "Mulish",
          fontSize: 24,
          color: "#f09f5d",
          textAlign: "center",
          padding: 1,
        }}
      >
        About
      </Typography>

      <Typography
        sx={{
          fontFamily: "Mulish",
          fontSize: 24,
          color: "#f09f5d",
          textAlign: "center",
          padding: 1,
        }}
      >
        Experience
      </Typography>

      <Typography
        sx={{
          fontFamily: "Mulish",
          fontSize: 24,
          color: "#f09f5d",
          textAlign: "center",
          padding: 1,
        }}
      >
        Education
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              justifyContent: "center",
              backgroundColor: "#c55911",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Saira Extra Condensed",
            fontSize: 135,
            color: "#c55911",
          }}
        >
          Paul{" "}
          <Box component="span" sx={{ color: "#343a40" }}>
            Kim
          </Box>
        </Typography>
        <Typography paragraph>
          Highly motivated, solutions-oriented, and relentlessly resourceful
          with a passion for software, machine learning, and data
        </Typography>

        <Divider sx={{ my: 7 }} />

        <Typography
          sx={{
            fontFamily: "Saira Extra Condensed",
            fontSize: 64,
            color: "#343a40",
          }}
        >
          EXPERIENCE
        </Typography>

        <BecksCard></BecksCard>
        <ASUCard></ASUCard>
        <AuroraCard></AuroraCard>

        <Divider sx={{ my: 7 }} />

        <Typography
          sx={{
            fontFamily: "Saira Extra Condensed",
            fontSize: 64,
            color: "#343a40",
          }}
        >
          EDUCATION
        </Typography>

        <EducationCard></EducationCard>
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
