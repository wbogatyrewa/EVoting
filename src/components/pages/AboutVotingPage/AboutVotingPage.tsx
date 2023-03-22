import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import { AboutVotingCard } from "../../cards/AboutVotingCard";
import { RadioList } from "../../RadioList";
import { Answer } from "../../Types";
import { Page } from "../Page";

interface Props {
  title: string;
  startDateTime: Date;
  endDateTime: Date;
  link: string;
  answers: Array<Answer>;
}

export const AboutVotingPage: FC<Props> = ({title, startDateTime, endDateTime, link, answers}: Props) => {
  const handleClickClose = () => {};

  return (
    <Page title={title} closed handleClose={handleClickClose}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box mb={2}>
            <AboutVotingCard 
              startDateTime={startDateTime} 
              endDateTime={endDateTime} 
              link={link}
            />
          </Box>
          <Box>
            <RadioList label="Варианты ответов" radioList={answers} />
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};