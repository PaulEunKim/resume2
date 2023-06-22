import * as React from "react";
import LinkIcon from "@mui/icons-material/Link";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

//card
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import asu from "../images/asu.jpg";

//lists
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

//icons
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

//pages
import challenger from '../pages/challenger.pdf';
import capstone from '../pages/capstone.pdf';

const EducationContents = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{
          fontFamily: "Saira Extra Condensed",
          fontSize: 32,
          color: "#343a40",
        }}
      >
        Bachelor's in Data Science, GPA: 3.9
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

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Fall 2021 - Spring 2023
      </Typography>

      <Typography variant="body2">
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            Implemented fundamental <strong>data structures, algorithms</strong>
            , and
            <strong> object-oriented programming</strong> based projects
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Implemented and visualized statistical models such as
            <strong> logistic/linear regression</strong>, pre-pruned/post-pruned
            <strong>
              {" "}
              decision tree models, K-nearest-neighbors clustering, random
              forests,
            </strong>{" "}
            and <strong>neural networks</strong> using{" "}
            <strong>Scikit-learn, Pandas, Tidyverse, Plotly,</strong> and{" "}
            <strong>Matplotlib</strong>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Evaluated and optimized hyperparameters using{" "}
            <strong>train-test split, cross-validation, AUC</strong> of ROC
            curve, and <strong>ridge/lasso regularization</strong>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Designed and implemented both OLTP databases in{" "}
            <strong>MySQL/SQLServer</strong> and OLAP data warehouses with{" "}
            <strong>dimensional modeling</strong>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Evoked deep thought on the importance of responsible engineering and
            management practices such as the{" "}
            <strong>challenger disaster </strong>
            <IconButton color="primary" href={challenger}>
              <PictureAsPdfIcon sx={{ color: "#c55911" }} />
            </IconButton>
          </ListItem>
        </List>
      </Typography>
    </CardContent>
  </React.Fragment>
);

const EducationCard = () => {
  return (
    <Box sx={{ display: "flex", p: 5, border: "none" }}>
      <Avatar
        alt="Remy Sharp"
        src={asu}
        sx={{ width: 156, height: 156, m: 1, ml: -2 }}
      />
      {EducationContents}
    </Box>
  );
};

export default EducationCard;
