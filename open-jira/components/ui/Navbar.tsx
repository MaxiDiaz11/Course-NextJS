import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { UIContext } from "@/context/ui";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon></MenuOutlinedIcon>
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
