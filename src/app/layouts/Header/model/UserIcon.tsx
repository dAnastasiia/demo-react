import { Avatar, useTheme } from "@mui/material";

export default function UserIcon() {
  const { palette } = useTheme();

  return (
    <Avatar
      sx={{
        width: 40,
        height: 40,
        color: palette.primary.main,
        backgroundColor: palette.common.white,
      }}
    />
  );
}
