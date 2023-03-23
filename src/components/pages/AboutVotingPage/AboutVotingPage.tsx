import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { AboutVotingCard } from "../../cards/AboutVotingCard";
import { RadioList } from "../../RadioList";
import { TransactionLink } from "../../TransactionLink";
import { Answer } from "../../Types";
import { Page } from "../Page";

interface Props {
  title: string;
  startDateTime: Date;
  endDateTime: Date;
  linkSmartContract: string;
  answers: Array<Answer>;
  account?: string;
  linkVote?: string;
  isVoted: boolean;
}

export const AboutVotingPage: FC<Props> = ({title, startDateTime = new Date("March 1, 2023 03:24:00"), 
          endDateTime = new Date("March 31, 2023 03:24:00"), linkSmartContract, answers, 
          account, linkVote = "", isVoted = false}: Props) => {
  const handleClickClose = () => {};

  return (
    <Page title={title} closed handleClose={handleClickClose} voted={account ? true : false} disabledBtn={isVoted}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box mb={2}>
            <AboutVotingCard 
              startDateTime={startDateTime} 
              endDateTime={endDateTime} 
              link={linkSmartContract}
            />
          </Box>
          <Box>
            <RadioList label="Варианты ответов" radioList={answers} disabled={isVoted ? true : account ? false : true} />
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
        {
          isVoted ? 
          <Grid item xs={4}>
            <Box display="flex" gap="3px" mb="0.35em">
              <TransactionLink link={linkVote}>Транзакция</TransactionLink>
              <Typography variant="body2" color="text.primary">вашего голоса записана в блокчейн</Typography>
            </Box>
          </Grid>
          : null
        }
        
      </Grid>
    </Page>
  );
};