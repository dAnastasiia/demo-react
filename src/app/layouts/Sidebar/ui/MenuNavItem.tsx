import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { alpha, ListItemButton, ListItemText, useTheme } from "@mui/material";

import { SectionProps } from "../helpers/types";

export default function MenuNavItem({
  textKey,
  href,
  icon,
  onClick,
}: SectionProps) {
  const navigate = useNavigate();
  const { palette, spacing } = useTheme();

  const { pathname } = useLocation();
  const isActive = useMemo(() => pathname.includes(href), [pathname, href]);

  const handleClick = () => {
    navigate(href);
    onClick();
  };

  return (
    <ListItemButton
      focusRipple
      onClick={handleClick}
      sx={{
        width: spacing(34.25),
        py: 1.5,
        px: 3,
        borderRadius: 8.5,

        color: isActive ? palette.common.white : "inherit",
        backgroundColor: isActive ? palette.primary.main : "inherit",

        "&:hover": {
          backgroundColor: alpha(palette.primary.main, 0.25),
        },

        transition: "all 200ms linear",
        marginLeft: "auto",
      }}
    >
      {icon}

      <ListItemText
        primaryTypographyProps={{ fontWeight: 600 }}
        sx={{
          ml: 1.5,
        }}
      >
        {textKey}
      </ListItemText>
    </ListItemButton>
  );
}
