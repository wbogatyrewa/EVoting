import { Box, CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      light: '#735EAB',
      dark: '#7965AF'
    },
  },
});

export const Loader: FC<unknown> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '100%', 
            margin: '50px 0' }}>
        <CircularProgress />
      </Box>
    </ThemeProvider>
  );
}