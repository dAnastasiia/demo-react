import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export default function MainLayout() {
  return (
    <Container component="main" maxWidth={false}>
      <Outlet />
    </Container>
  );
}
