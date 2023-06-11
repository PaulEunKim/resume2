import * as React from "react";
import LinkIcon from "@mui/icons-material/Link";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

//card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";

//lists
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const AuroraContents = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
        Software Development Intern
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Sep 2019 - Mar 2020
      </Typography>

      <Typography variant="body2">
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            Digitized court operations, processes, and forms using
            <strong> HTML, CSS, JavaScript, and PHP</strong>
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

const AuroraCard = () => {
  return (
    <React.Fragment>
      <Box sx={{ minWidth: 275, maxWidth: 500 }}>
        <Card variant="outlined" sx={{borderColor: '#c55911'}}>{AuroraContents}</Card>
      </Box>
    </React.Fragment>
  );
};

export default AuroraCard;
