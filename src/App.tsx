import { ThemeProvider } from "@mui/material";
import React from "react";
import { globalTheme } from "./globalTheme";

export const App: React.FC<unknown> = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      
    </ThemeProvider>
  );
};