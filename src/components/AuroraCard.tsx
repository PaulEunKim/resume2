import * as React from "react";
import LinkIcon from "@mui/icons-material/Link";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

//card
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import aurora from "../images/aurora.jpg";

//lists
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const AuroraContents = (
  <React.Fragment>
    <CardContent>
      <Typography
          sx={{
            fontFamily: "Saira Extra Condensed",
            fontSize: 32,
            color: "#343a40",
          }}
        >
        Software Development Intern
        </Typography>

        <Typography
        sx={{
          fontFamily: "Saira Extra Condensed",
          fontSize: 24,
          color: "#c55911",
        }}
      >
        City of Aurora, Colorado
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

    {/* <CardActions>
      <Button size="small">
        <LinkIcon></LinkIcon>
      </Button>
    </CardActions> */}
  </React.Fragment>
);

const AuroraCard = () => {
  return (
    <Box sx={{display:'flex', p:5, border: 'none'}}>
    <Avatar
        alt="Remy Sharp"
        src={aurora}
        sx={{ width: 156, height: 156, m:1, ml:-2}}
      />
    {AuroraContents} 
    </Box>
  );
};

export default AuroraCard;
