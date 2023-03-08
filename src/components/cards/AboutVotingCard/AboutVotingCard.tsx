import { Box, Card, CardContent, createTheme, ThemeProvider, Typography } from "@mui/material";
import React, { FC } from "react";
import { StatusChip } from "../../StatusChip";
import { TransactionLink } from "../../TransactionLink";
import { Status } from "../../Types";

export interface Props {
  startDateTime: Date;
  endDateTime: Date;
  link: string;
}

const theme = createTheme({
  palette: {
    text: {
      primary: "#000000"
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 600,
      fontSize: "0.875rem"
    }
  }
});

export const AboutVotingCard: FC<Props> = ({ startDateTime, endDateTime, link }: Props) => {
  const now = new Date().getTime();
  const status = now >= startDateTime.getTime() ? now <= endDateTime.getTime() ? 
    Status.Active : Status.Finished : Status.Before;
    
  return (
    <ThemeProvider theme={theme}>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="subtitle1" color="text.primary" gutterBottom>
            О голосовании
          </Typography>
          <Typography variant="body2" color="text.primary" gutterBottom>
            {`с ${startDateTime.toLocaleDateString()} ${startDateTime.toLocaleTimeString()}
            до ${endDateTime.toLocaleDateString()} ${endDateTime.toLocaleTimeString()}`}
          </Typography>
          <Box display="flex" gap="3px" mb="0.35em">
            <TransactionLink link={link}>Смарт-контракт</TransactionLink>
            <Typography variant="body2" color="text.primary">голосования в блокчейне</Typography>
          </Box>
          <StatusChip label={status} color={status === Status.Active ? "success" : "info"} />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};