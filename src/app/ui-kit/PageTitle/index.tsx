import { Typography } from "@mui/material";

export default function PageTitle({ text }: { text: string }) {
  return (
    <Typography component="h1" variant="h4" fontWeight={600}>
      {text}
    </Typography>
  );
}
