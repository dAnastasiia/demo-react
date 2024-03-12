import { ReactNode } from "react";

import { Paper, Stack, SxProps, Typography } from "@mui/material";

interface ContentWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
  sx?: SxProps;
}

export default function ContentWrapper({
  children,
  title,
  description,
  sx,
}: ContentWrapperProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 6.25,
        bgcolor: "common.white",

        height: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        ...sx,
      }}
    >
      {(title || description) && (
        <Stack mb={3}>
          {title && (
            <Typography
              component="h2"
              variant="h5"
              sx={{
                textTransform: "capitalize",
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
          )}

          {description && (
            <Typography variant="body1" sx={{ lineHeight: 1.17 }}>
              {description}
            </Typography>
          )}
        </Stack>
      )}

      {children}
    </Paper>
  );
}
