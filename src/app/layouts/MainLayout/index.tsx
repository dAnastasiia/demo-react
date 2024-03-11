import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";

import { HEADER_HEIGHT, MAIN_CONTAINER_PADDING } from "../constants";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function MainLayout() {
  return (
    <Box display="flex">
      <Sidebar />

      <Box width={1}>
        <Header />
        <Container
          sx={{
            marginTop: `${HEADER_HEIGHT}px`,
            padding: MAIN_CONTAINER_PADDING,
          }}
          component="main"
          maxWidth={false}
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
