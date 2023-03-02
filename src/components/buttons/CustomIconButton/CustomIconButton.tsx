import { ButtonProps, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { FC } from "react";

const theme = createTheme({

});

export const CustomIconButton: FC<ButtonProps> = ({children, ...props}: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <IconButton 
      {...props}>
        {children}
      </IconButton>
    </ThemeProvider>
  );
};