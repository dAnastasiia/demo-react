import { Grid, Stack, Typography } from "@mui/material";

import { Sales, Stats } from "@/components/dashboard";
import PageTitle from "@/ui-kit/PageTitle";

export default function DashboardPage() {
  return (
    <>
      <Stack spacing={0.5} mb={2}>
        <PageTitle text="Welcome John Doe," />

        <Typography component="h2" variant="subtitle1">
          All systems are running smoothly!
        </Typography>
      </Stack>

      <Grid container>
        <Grid item xs={12} lg={6}>
          <Sales />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Stats />
        </Grid>
      </Grid>
    </>
  );
}
