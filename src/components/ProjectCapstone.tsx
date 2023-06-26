import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";

import becks from "../images/capstone.gif";

export default function ProjectCapstone() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={becks}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Data Science Capstone
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Used <strong>logistic regression</strong> and
          <strong> decision tree classifiers</strong> to analyze m.o. codes of
          crimes using <strong>sci-kit learn</strong>,
          <strong> matplotlib</strong>, and <strong>Tableau</strong>; wrangled,
          cleaned, and encoded 1M+ rows of categorical data with 500+ categories
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <LinkIcon></LinkIcon>
        </Button>
      </CardActions>
    </Card>
  );
}
