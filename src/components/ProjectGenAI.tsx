import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

import becks from "../images/genAI.gif";

export default function ProjectGenAI() {
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
          AI Art Generation Discord Bot
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bot that generates AI generated images based on user prompt using
          <strong> Python</strong> and <strong>Stable Diffusion</strong> API
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <GitHubIcon></GitHubIcon>
        </Button>
      </CardActions>
    </Card>
  );
}
