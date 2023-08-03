import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { UIContext } from "@/context/ui";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NextLink from "next/link";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon></MenuOutlinedIcon>
        </IconButton>

        <NextLink
          href="/"
          passHref
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography variant="h6">OpenJira</Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
