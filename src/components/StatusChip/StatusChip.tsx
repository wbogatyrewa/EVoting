import { Chip, ChipProps, createTheme, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

const theme = createTheme({
  palette: {
    info: {
      main: '#79747E',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#2E7D32',
      contrastText: '#FFFFFF'
    },
  }
});

export const StatusChip: FC<ChipProps> = ({ ...props }: ChipProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Chip size="small" {...props} />
    </ThemeProvider>
  );
};