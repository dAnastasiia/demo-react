import { Stack, Typography } from "@mui/material";

import { Stats } from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <>
      <Stack spacing={0.5} mb={2}>
        <Typography component="h1" variant="h4" fontWeight={600}>
          Welcome Admin
        </Typography>
        <Typography component="h2" variant="subtitle1">
          All systems are running smoothly!
        </Typography>
      </Stack>

      <Stats />
    </>
  );
}
