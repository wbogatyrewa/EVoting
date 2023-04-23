import { Box, Grid, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../app/store";
import { AboutVotingCard } from "../../cards/AboutVotingCard";
import { RadioList } from "../../RadioList";
import { TransactionLink } from "../../TransactionLink";
import { Status } from "../../Types";
import { Page } from "../Page";
import { vote } from "../../../scripts/vote";
import { checkIsVoted } from "../../../scripts/checkIsVoted";

export const AboutVotingPage: FC<unknown> = () => {
  const params = useParams();
  const address = params.votingAddress;
  const account = useSelector((state: RootState) => state.account.value);
  const votingList = useSelector((state: RootState) => state.votingList.value);
  const voting = votingList.find(element => element.address === address) || votingList[0];
  const [status, setStatus] = useState<Status>(Status.Before);
  const [answerLabel, setAnswerLabel] = useState<string>("");
  const [voteLink, setVoteLink] = useState<string>("");
  const [isVoted, setIsVoted] = useState<boolean>(false); // проверять в смарте (проголосовал ли аккаунт)

  let voted = -1;

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswerLabel((event.target as HTMLInputElement).value);
  };

  const handleChangeVote = () => {
    // определить адрес выбранного варианта ответа
    let answerAddress = voting.answers.find((element) => element.label === answerLabel)?.address || "";
    
    vote(voting.address, answerAddress).then((res: any) => {
      setIsVoted(true); // юзер проголосовал
      setVoteLink(res);
    });
  };

  useEffect(() => {
    if (voting !== undefined) {
      let now = new Date().getTime();
      setStatus(now >= new Date(voting.startDateTime).getTime() ? now <= new Date(voting.endDateTime).getTime() ? 
        Status.Active : Status.Finished : Status.Before);
    }

    voted = voting.voters.findIndex(element => {
      return element.toLowerCase() === account.toLowerCase();
    });

    if (account) checkIsVoted(voting.address, account).then((result) => setIsVoted(result));
  }, []);
  
  return (
    <Page 
      title={voting.name}
      closed 
      voted={account && voted ? true : false}
      buttonChildren="Проголосовать"
      handleClick={handleChangeVote}
      disabledBtn={isVoted || status === Status.Before || status === Status.Finished || answerLabel.length === 0 }>
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
            <RadioList 
              label="Варианты ответов" 
              radioList={voting.answers} disabled={isVoted || status === Status.Before || status === Status.Finished ? true : account ? false : true}
              value={answerLabel}
              onChange={handleChangeAnswer} />
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
        {
          isVoted ? 
          <Grid item xs={4}>
            <Box display="flex" gap="3px" mb="0.35em">
              <TransactionLink link={voteLink ? voteLink : `https://sepolia.etherscan.io/address/${voting.address}`}>
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