import { Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      light: '#735EAB',
      dark: '#7965AF'
    },
    secondary: {
      main: '#E8DEF8',
      light: '#D8CEE8',
      dark: '#D0C6DF',
      contrastText: '#1D192B'
    },
  },
  typography: {
    button: {
      textTransform: "initial"
    }
  },
});

export const CustomButton: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return (
  <ThemeProvider theme={theme}>
    <Button 
      disableElevation
      disableFocusRipple
      sx={{ borderRadius: '100px' }}
      {...props}>
        {children}
    </Button>
  </ThemeProvider>
  );
};