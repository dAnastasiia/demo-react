import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";

import {
  DRAWER_WIDTH,
  HEADER_HEIGHT,
  MAIN_CONTAINER_PADDING,
} from "../constants";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box display="flex">
      <Header handleDrawerToggle={handleDrawerToggle} />

      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
      />

      <Container
        sx={{
          flexGrow: 1,
          p: MAIN_CONTAINER_PADDING,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          marginTop: `${HEADER_HEIGHT}px`,
        }}
        component="main"
        maxWidth={false}
      >
        <Outlet />
      </Container>
    </Box>
  );
}
