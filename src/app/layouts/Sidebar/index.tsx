import { Drawer, List } from "@mui/material";

import { OPENED_SIDEBAR_WIDTH } from "../constants";
import { DRAWER_RADIUS, pages, SIDEBAR_PADDING } from "./helpers";
import { SidebarMenuItem } from "./ui";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      open
      elevation={10}
      sx={{
        width: OPENED_SIDEBAR_WIDTH,
      }}
      PaperProps={{
        sx: {
          width: OPENED_SIDEBAR_WIDTH,
          borderTopRightRadius: DRAWER_RADIUS,
          borderBottomRightRadius: DRAWER_RADIUS,
        },
      }}
    >
      <List
        component="nav"
        sx={{
          flexGrow: 1,
          backgroundColor: "inherit",
          p: SIDEBAR_PADDING,
        }}
      >
        <List disablePadding>
          {pages.map((data) => (
            <SidebarMenuItem key={data.textKey} {...data} />
          ))}
        </List>
      </List>
    </Drawer>
  );
}
