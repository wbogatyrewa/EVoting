import { Box, createTheme, Icon, ThemeProvider, Typography } from "@mui/material";
import React, { FC } from "react";

export interface Props {
  icon: React.ReactNode;
  account: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
    },
  },
});

export const UserAccount: FC<Props> = ({ icon, account }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: '0' }}>
        <Box>
          {icon}
        </Box>
        <Box>
          <Typography variant="subtitle2" color="primary" textTransform="uppercase" fontWeight={600}>
            {(account.slice(0, 5) + '...' + account.slice(account.length - 4, account.length))}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};