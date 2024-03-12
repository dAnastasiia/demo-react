import { Grid, Stack, Typography } from "@mui/material";

import { Sales, Stats } from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <>
      <Stack spacing={0.5} mb={2}>
        <Typography component="h1" variant="h4" fontWeight={600}>
          Welcome John Doe
        </Typography>
        <Typography component="h2" variant="subtitle1">
          All systems are running smoothly!
        </Typography>
      </Stack>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Sales />
        </Grid>

        <Grid item xs={12} md={6}>
          <Stats />
        </Grid>
      </Grid>
    </>
  );
}
