import { Box, Drawer, List } from "@mui/material";

import { DRAWER_WIDTH } from "../constants";
import { DRAWER_RADIUS, pages, SIDEBAR_PADDING } from "./helpers";
import { SidebarMenuItem } from "./ui";

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}

export default function Sidebar({
  mobileOpen,
  handleDrawerClose,
  handleDrawerTransitionEnd,
}: SidebarProps) {
  const drawer = (
    <List
      component="ul"
      sx={{
        flexGrow: 1,
        backgroundColor: "inherit",
        p: SIDEBAR_PADDING,
      }}
    >
      {pages.map((data) => (
        <SidebarMenuItem
          key={data.textKey}
          {...data}
          onClick={handleDrawerClose}
        />
      ))}
    </List>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        elevation={10}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            borderBottomRightRadius: DRAWER_RADIUS,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            borderBottomRightRadius: DRAWER_RADIUS,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
