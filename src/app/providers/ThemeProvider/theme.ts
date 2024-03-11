import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colors.main,
    },

    background: { default: colors.background },

    success: { main: colors.success },
    error: { main: colors.error },
    warning: { main: colors.warning },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
