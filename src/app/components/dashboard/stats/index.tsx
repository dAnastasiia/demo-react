import { Box, useTheme } from "@mui/material";

import { COLORS } from "@/utils/constants";

import Card from "./model/Card";

export default function Stats() {
  const { breakpoints } = useTheme();

  return (
    <Box
      height={1}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gridTemplateRows: "repeat(1, 1fr)",
        gap: 2,

        [breakpoints.up("md")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
        },
      }}
    >
      <Card
        title="Today's bookings"
        value={4006}
        note="10.00% (30 days)"
        color={COLORS.lightBlue}
      />

      <Card
        title="Total bookings"
        value={61344}
        note="22.00% (30 days)"
        color={COLORS.violet}
      />

      <Card
        title="Number of meetings"
        value={34040}
        note="2.00% (30 days)"
        color={COLORS.lightViolet}
      />

      <Card
        title="Number of clients"
        value={47033}
        note="0.22% (30 days)"
        color={COLORS.coral}
      />
    </Box>
  );
}
