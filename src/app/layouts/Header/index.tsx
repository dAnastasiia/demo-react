import { AppBar, Stack } from "@mui/material";

import { HEADER_HEIGHT, OPENED_SIDEBAR_WIDTH } from "../constants";
import UserMenu from "./model/UserMenu";

export default function Header() {
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
        <UserMenu />
      </Stack>
    </AppBar>
  );
}
