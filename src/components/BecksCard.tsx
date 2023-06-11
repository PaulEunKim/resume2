import * as React from "react";

// icons
import LinkIcon from "@mui/icons-material/Link";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

//card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

//button
import Button from "@mui/material/Button";

//lists
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const BecksContents = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
      Machine Learning Engineer Intern
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
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

    <CardActions>
      <Button size="small">
        <LinkIcon></LinkIcon>
      </Button>
    </CardActions>
  </React.Fragment>
);

const BecksCard = () => {
  return (
    <React.Fragment>
      <Box sx={{ minWidth: 275, maxWidth: 500 }}>
        <Card variant="outlined" sx={{borderColor: '#c55911'}}>{BecksContents}</Card>
      </Box>
    </React.Fragment>
  );
}

export default BecksCard;
