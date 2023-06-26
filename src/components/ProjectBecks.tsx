import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

import becks from "../images/becks.gif";

export default function ProjectBecks() {
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
          Crop Detection
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Counting corn plants with <strong>Dynamic R-CNN</strong> using
          <strong> ArcGIS</strong> and <strong>Python</strong>
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
