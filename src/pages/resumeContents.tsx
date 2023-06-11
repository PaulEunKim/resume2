import * as React from "react";

//list
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const resume = {
  experience: {
    title: [
      "Machine Learning Engineer Intern",
      "Mathematics Research Intern",
      "Warehouse Associate",
      "Software Development Intern",
    ],

    company: [
      "Beck's Hybrids",
      "Arizona State University",
      "Amazon",
      "City of Aurora",
    ],

    tenure: [
      "Jan 2023 - May 2023",
      "May 2022 - Aug 2022",
      "Sep 2018 - May 2022",
      "Sep 2019 - Mar 2020",
    ],

    description: [
      [
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            Produced a successful and replicable object detection workflow using
            convolutional neural networks in ArcGIS for counting corn plants
            from drone images; setting a pathway to automate the process that
            was previously done by hand and presented findings to Beck’s
            Hybrid’s team and the National Data Mine Network
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>asdf</ListItem>
        </List>,
      ],

      [
        "Integrated a variety of linear algebra, numerical analysis, and calculus techniques to de-blur blurry/noisy imagesIntegrated a variety of linear algebra, numerical analysis, and calculus techniques to de-blur blurry/noisy images",
      ],

      [
        "Awarded employee of the quarter (Winter ‘18) for working efficiently, accepting the most difficult tasks, and without absences",
        "Designed a stow cart that was later used as standard practice across other larger Delivery Station facilities",
      ],

      [
        "Digitized court operations, processes, and forms using HTML, CSS, JavaScript, and PHP",
      ],
    ],
  },
};

export default resume;
