import * as React from "react";

// icons
import LinkIcon from "@mui/icons-material/Link";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

//card
import becks from "../images/becks.jpg";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";

//button
import Button from "@mui/material/Button";

//lists
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const BecksContents = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{
          fontFamily: "Saira Extra Condensed",
          fontSize: 32,
          color: "#343a40",
        }}
      >
        Machine Learning Engineer Intern
      </Typography>

      <Typography
        sx={{
          fontFamily: "Saira Extra Condensed",
          fontSize: 24,
          color: "#c55911",
        }}
      >
        Beck's Hybrids
      </Typography>

      <Typography sx={{ mb: 1.5}} color="text.secondary">
        Jan 2023 - May 2023
      </Typography>

      <Typography variant="body2">
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            Produced a successful and replicable object detection
            <strong> workflow</strong> using
            <strong> convolutional neural networks</strong> in
            <strong> ArcGIS</strong> for counting corn plants from drone images;
            setting a pathway to automate the process that was previously done
            by hand and <strong>presented</strong> findings to Beck’s Hybrid’s
            team and the National Data Mine Network and presented findings to
            Beck’s Hybrid’s team and the National Data Mine Network
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            Improved object detection accuracy from 0% to 56% to 89% through
            outside-the-box thinking in model selection, parameterization and
            labeling
          </ListItem>
        </List>
      </Typography>
    </CardContent>

    {/* <CardActions>
      <Button size="small">
        <LinkIcon></LinkIcon>
      </Button>
    </CardActions> */}
  </React.Fragment>
);

const BecksCard = () => {
  return (
    <Box sx={{ display: "flex", p: 5, border: "none" }}>
      <Avatar
        alt="Remy Sharp"
        src={becks}
        sx={{ width: 156, height: 156, m: 1, ml: -2 }}
      />
      {BecksContents}
    </Box>
  );
};

export default BecksCard;
