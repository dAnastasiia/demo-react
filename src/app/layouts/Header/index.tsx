import { useEffect, useState } from "react";

import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";

import { DRAWER_WIDTH, HEADER_HEIGHT } from "../constants";
import UserMenu from "./model/UserMenu";

interface HeaderProps {
  handleDrawerToggle: () => void;
}

export default function Header({ handleDrawerToggle }: HeaderProps) {
  const { palette } = useTheme();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > HEADER_HEIGHT;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        height: HEADER_HEIGHT,
        width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { md: `${DRAWER_WIDTH}px` },
        justifyContent: "center",
        background: isScrolled ? "primary" : "transparent",

        ...(!isScrolled && { boxShadow: "none" }),
      }}
    >
      <Toolbar
        sx={{
          px: 3,
          alignItems: "center",
          justifyContent: { xs: "space-between", md: "flex-end" },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon
            color="primary"
            sx={{ ...(isScrolled && { fill: palette.common.white }) }}
          />
        </IconButton>

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}
