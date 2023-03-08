import { createTheme, Link, LinkProps, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

export interface Props {
  children: React.ReactNode;
  link: string;
  props?: LinkProps;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
    },
  },
});

export const TransactionLink: FC<Props> = ({ children, link, props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Link 
        href={link} 
        color="primary" 
        variant="body2" 
        target="_blank" 
        rel="noopener" 
        underline="always"
        sx={{
          textDecorationStyle: "dotted",
          textDecorationThickness: "1.5px"
        }}
        {...props}>
        {children}
      </Link>
    </ThemeProvider>
    
  );
};