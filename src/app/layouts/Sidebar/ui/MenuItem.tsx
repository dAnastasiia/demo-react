import { Box } from "@mui/material";

import { MAIN_FONT_SIZE } from "@/utils/constants";

import { Page } from "../helpers/types";
import MenuNavItem from "./MenuNavItem";

export default function MenuItem(data: Page) {
  return (
    <Box component="li" sx={{ fontSize: MAIN_FONT_SIZE }}>
      <MenuNavItem {...data} />
    </Box>
  );
}
