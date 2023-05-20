import React, { useContext } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/Inbox";
import { UIContext } from "@/context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 200 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <MailIcon></MailIcon> : <InboxIcon></InboxIcon>}
              </ListItemIcon>
              <ListItemText primary={text}></ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider></Divider>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <MailIcon></MailIcon> : <InboxIcon></InboxIcon>}
              </ListItemIcon>
              <ListItemText primary={text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
