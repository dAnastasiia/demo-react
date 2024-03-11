import { Grid } from "@mui/material";

import ContentWrapper from "@/ui-kit/ContentWrapper";

import StyledTypography from "./StyledTypography";

interface CardProps {
  title: string;
  value: number;
  note: string;
  color: string;
}

export default function Card({ title, value, note, color }: CardProps) {
  return (
    <Grid item xs={12} md={6}>
      <ContentWrapper sx={{ backgroundColor: color }}>
        <StyledTypography
          sx={{
            mb: 3,
            textTransform: "capitalize",
          }}
        >
          {title}
        </StyledTypography>

        <StyledTypography sx={{ fontSize: 32 }}>{value}</StyledTypography>

        <StyledTypography>{note}</StyledTypography>
      </ContentWrapper>
    </Grid>
  );
}
