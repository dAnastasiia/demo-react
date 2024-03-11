import { alpha, createTheme } from "@mui/material/styles";

import { COLORS, MAIN_FONT_SIZE } from "@/utils/constants";

const theme = createTheme();

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.violet,
    },

    background: { default: alpha(COLORS.lightViolet, 0.15) },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },

  components: {
    MuiStack: { defaultProps: { spacing: 2 } },
    MuiGrid: { defaultProps: { spacing: 2 } },
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
            borderColor: COLORS.violet,
          },
        },
      ],
    },
  },
});
