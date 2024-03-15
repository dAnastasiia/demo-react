import { Stack } from "@mui/material";

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
    <ContentWrapper sx={{ backgroundColor: color }}>
      <StyledTypography sx={{ textTransform: "capitalize" }}>
        {title}
      </StyledTypography>

      <Stack spacing={1}>
        <StyledTypography sx={{ fontSize: 32 }}>{value}</StyledTypography>

        <StyledTypography>{note}</StyledTypography>
      </Stack>
    </ContentWrapper>
  );
}
