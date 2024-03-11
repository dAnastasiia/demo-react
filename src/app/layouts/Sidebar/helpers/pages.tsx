import {
  GroupsOutlined as PeopleIcon,
  SpaceDashboardOutlined as DashboardIcon,
  ErrorOutline as NotFoundIcon,
} from "@mui/icons-material";

import { AppRoutes } from "@/constants";
import { Page } from "./types";

const { dashboard, users } = AppRoutes;

export const pages: Page[] = [
  {
    icon: <DashboardIcon />,
    textKey: "Dashboard",
    href: dashboard,
  },
  {
    icon: <PeopleIcon />,
    textKey: "Users",
    href: users,
  },
  {
    icon: <NotFoundIcon />,
    textKey: "Not Found [demo]",
    href: "not-found",
  },
];
