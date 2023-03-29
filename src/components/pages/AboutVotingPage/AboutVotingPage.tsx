import { Box, Grid, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../app/store";
import { setVotingList } from "../../../features/votingListSlice";
import { getVotingList } from "../../../scripts/getVotingList";
import { AboutVotingCard } from "../../cards/AboutVotingCard";
import { RadioList } from "../../RadioList";
import { TransactionLink } from "../../TransactionLink";
import { Status, Voting } from "../../Types";
import { Page } from "../Page";

export const AboutVotingPage: FC<unknown> = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const address = params.votingAddress;
  const account = useSelector((state: RootState) => state.account.value);
  const votingList = useSelector((state: RootState) => state.votingList.value);
  const voting = votingList.find(element => element.address === address) || votingList[0];
  const [status, setStatus] = useState<Status>(Status.Before);
  let voted = -1;

  useEffect(() => {
    // if (votingList.length === 0) {
    //   getVotingList().then((list: Voting[]) => dispatch(setVotingList(list)));
    // }
    if (voting !== undefined) {
      let now = new Date().getTime();
      setStatus(now >= new Date(voting.startDateTime).getTime() ? now <= new Date(voting.endDateTime).getTime() ? 
        Status.Active : Status.Finished : Status.Before);
    }

    voted = voting.voters.findIndex(element => {
      return element.toLowerCase() === account.toLowerCase();
    });
  }, []);

  const isVoted = false; // проверять в смарте (проголосовал ли аккаунт)
  
  return (
    <Page 
      title={voting.name}
      closed 
      voted={account && voted ? true : false}
      buttonChildren="Проголосовать"
      disabledBtn={isVoted || status === Status.Before || status === Status.Finished}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box mb={2}>
            <AboutVotingCard 
              startDateTime={new Date(voting.startDateTime)} 
              endDateTime={new Date(voting.endDateTime)} 
              link={`https://sepolia.etherscan.io/address/${voting.address}`}
            />
          </Box>
          <Box>
            <RadioList label="Варианты ответов" radioList={voting.answers} disabled={isVoted || status === Status.Before || status === Status.Finished ? true : account ? false : true} />
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
        {
          isVoted ? 
          <Grid item xs={4}>
            <Box display="flex" gap="3px" mb="0.35em">
              <TransactionLink link={`https://sepolia.etherscan.io/address/${voting?.address}`}>
                Транзакция
              </TransactionLink>
              <Typography variant="body2" color="text.primary">
                вашего голоса записана в блокчейн
              </Typography>
            </Box>
          </Grid>
          : null
        }
        
      </Grid>
    </Page>
  );
};