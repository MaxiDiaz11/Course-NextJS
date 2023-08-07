import React from "react";
import { AppBar, IconButton, Toolbar, Link, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import NextLink from "next/link";

export const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined></MenuOutlined>
        </IconButton>
        <NextLink href={"/"} passHref legacyBehavior >
          <Link>
            <Typography variant="h6" color={"white"}>
              CookieMaster
            </Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }}></div>
        <NextLink href={"/theme-change"} passHref legacyBehavior >
          <Link>
            <Typography variant="h6" color={"white"}>
              Cambiar tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
