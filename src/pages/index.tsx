import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import CustomizedTimeline from "../components/CustomizedTimeline";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import becks from "../images/becks.jpg";
import { Avatar } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

const drawerWidth = 300;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <ResponsiveDrawer></ResponsiveDrawer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
