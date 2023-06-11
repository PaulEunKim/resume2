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

const ASUContents = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
        Mathematics Research Intern
      </Typography>

      <Typography sx={{ mb: 1.5 }}>
        May 2022 - Aug 2022
      </Typography>

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

    <CardActions>
      <Button size="small">
        <LinkIcon></LinkIcon>
      </Button>
    </CardActions>
  </React.Fragment>
);

const ASUCard = () => {
  return (
    <React.Fragment>
      <Box sx={{ minWidth: 275, maxWidth: 500 }}>
        <Card variant="outlined" sx={{borderColor: '#c55911'}}>{ASUContents}</Card>
      </Box>
    </React.Fragment>
  );
}

export default ASUCard