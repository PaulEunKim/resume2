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

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import "@fontsource/saira-extra-condensed/600.css";
import "@fontsource/mulish/700.css";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
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
