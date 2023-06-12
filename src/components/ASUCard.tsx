import * as React from "react";
import LinkIcon from "@mui/icons-material/Link";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

//card
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

//other
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";

//lists
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

//images
import asu from "../images/asu.jpg";

const ASUContents = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{
          fontFamily: "Saira Extra Condensed",
          fontSize: 32,
          color: "#343a40",
        }}
      >
        Mathematics Research Intern
      </Typography>

      <Typography
        sx={{
          fontFamily: "Saira Extra Condensed",
          fontSize: 24,
          color: "#c55911",
        }}
      >
        Arizona State University
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">May 2022 - Aug 2022</Typography>

      <Typography variant="body2">
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            Integrated a variety of <strong>linear algebra</strong>,
            <strong> numerical analysis</strong>, and
            <strong>calculus</strong> techniques to de-blur blurry/noisy images
            using <strong>MatLab</strong> and presented findings to ASU
            professors and students
          </ListItem>
        </List>
      </Typography>
    </CardContent>
{/* 
    <CardActions>
      <Button size="small">
        <LinkIcon></LinkIcon>
      </Button>
    </CardActions> */}
  </React.Fragment>
);

const ASUCard = () => {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", p: 5, border: "none" }}>
        <Avatar
          alt="Remy Sharp"
          src={asu}
          sx={{ width: 156, height: 156, m: 1, ml: -2 }}
        />
        {ASUContents}
      </Box>
    </React.Fragment>
  );
};

export default ASUCard;
