import { MAIN_FONT_SIZE } from "@/utils/constants";
import { alpha, createTheme } from "@mui/material/styles";

import { colors } from "./colors";

const theme = createTheme();
export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colors.main,
    },

    background: { default: alpha(colors.background, 0.5) },

    success: { main: colors.success },
    error: { main: colors.error },
    warning: { main: colors.warning },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontSize: MAIN_FONT_SIZE,
          fontWeight: 500,
          lineHeight: 1.42,
          borderRadius: theme.spacing(6.25),
          padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: theme.palette.common.white,
          },
        },

        {
          props: { variant: "outlined" },
          style: {
            borderColor: colors.main,
          },
        },
      ],
    },
  },
});
