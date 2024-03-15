import { useNavigate } from "react-router-dom";

import { Button, Container, Stack, Typography } from "@mui/material";

interface ExternalLayoutProps {
  title: string;
  description: string;
}

export default function ExternalLayout({
  title,
  description,
}: ExternalLayoutProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <Stack
        spacing={2}
        sx={{
          margin: "auto",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 480,
          minHeight: "100vh",
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          {title}
        </Typography>
        <Typography>{description}</Typography>

        <Button onClick={() => navigate(-1)}>Go back</Button>
      </Stack>
    </Container>
  );
}
