import { Avatar, useTheme } from "@mui/material";

export default function UserIcon() {
  const { palette } = useTheme();

  return (
    <Avatar
      sx={{
        width: 32,
        height: 32,
        color: palette.primary.main,
        backgroundColor: palette.common.white,
      }}
    />
  );
}
