import { Card, CardActionArea, CardContent, createTheme, ThemeProvider, Typography } from "@mui/material";
import React, { FC } from "react";
import { StatusChip } from "../StatusChip";

export enum Status {
  Active = "Идет голосование",
  Before = "Скоро начнется",
  Finished = "Завершено"
}

export interface Props {
  name: string;
  startDateTime: Date;
  endDateTime: Date;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      light: '#735EAB',
      dark: '#7965AF'
    },
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

export const VotingCard: FC<Props> = ({ name, startDateTime, endDateTime }: Props) => {
  const now = new Date().getTime();
  const status = now >= startDateTime.getTime() ? now <= endDateTime.getTime() ? 
    Status.Active : Status.Finished : Status.Before;

  return (
    <ThemeProvider theme={theme}>
      <Card elevation={3} sx={{ maxWidth: 260, borderRadius: 4, background: 'linear-gradient(0deg, rgba(103, 80, 164, 0.08), rgba(103, 80, 164, 0.08)), #FFFBFE'}}>
        <CardActionArea>
          <CardContent>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              {name}
            </Typography>
            {
              status === Status.Active ?
              <Typography variant="body2" color="text.primary" gutterBottom>
                {`до ${endDateTime.toLocaleDateString()} ${endDateTime.toLocaleTimeString()}`}
              </Typography>
              :
              <>
                <Typography variant="body2" color="text.primary">
                  {`с ${startDateTime.toLocaleDateString()} ${startDateTime.toLocaleTimeString()}`}
                </Typography>
                <Typography variant="body2" color="text.primary" gutterBottom>
                  {`до ${endDateTime.toLocaleDateString()} ${endDateTime.toLocaleTimeString()}`}
                </Typography>
              </>
            }
            <StatusChip label={status} color={status === Status.Active ? "success" : "info"} />
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};