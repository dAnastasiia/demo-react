import { AppBar, Avatar, Stack, useTheme } from "@mui/material";

import { HEADER_HEIGHT, OPENED_SIDEBAR_WIDTH } from "../constants";

export default function Header() {
  const { palette } = useTheme();

  return (
    <AppBar
      sx={{
        height: HEADER_HEIGHT,
        width: `calc(100% - ${OPENED_SIDEBAR_WIDTH}px)`,
        boxShadow: "none",
        background: "transparent",
      }}
    >
      <Stack
        direction="row"
        sx={{
          minHeight: HEADER_HEIGHT,
          px: 3,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Avatar
          sx={{
            color: palette.primary.main,
            backgroundColor: palette.common.white,
          }}
        />
      </Stack>
    </AppBar>
  );
}
