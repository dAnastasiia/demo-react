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
    MuiStack: { defaultProps: { spacing: 3 } },
    MuiGrid: { defaultProps: { spacing: 3 } },
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

    MuiCssBaseline: {
      styleOverrides: `
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: ${COLORS.violet};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${COLORS.lightViolet};
        }`,
    },
  },
});
