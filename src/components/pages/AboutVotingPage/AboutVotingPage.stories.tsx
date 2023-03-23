import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../Header';
import { AboutVotingPage } from './AboutVotingPage';
import { Container } from '@mui/material';

export default {
  title: "Pages",
  component: AboutVotingPage,
} as ComponentMeta<typeof AboutVotingPage>;

const Template: ComponentStory<typeof AboutVotingPage> = (args) =>
<>
  <Header account={args.account} />
  <Container maxWidth="lg" sx={{
        marginTop: "32px",
        "@media (min-width: 1200px)": {
          maxWidth: '1128px'
        }
      }}>
    <AboutVotingPage {...args}/>
  </Container>
</>

export const AboutVotingActive = Template.bind({});
AboutVotingActive.args = {
  title: "AppLe или AnDrOiD?",
  startDateTime: new Date('March 1, 2023 03:24:00'),
  endDateTime: new Date('March 31, 2023 03:24:00'),
  answers: [
    { label: "Apple" },
    { label: "Android" }
  ],
  linkSmartContract: "https://etherscan.io/",
  account: "0x543EbD3F56B2b9848b246C689E0302dC06CcFa48"
};

export const AboutVotingActiveVoted = Template.bind({});
AboutVotingActiveVoted.args = {
  title: "AppLe или AnDrOiD?",
  startDateTime: new Date('March 1, 2023 03:24:00'),
  endDateTime: new Date('March 31, 2023 03:24:00'),
  answers: [
    { label: "Apple" },
    { label: "Android" }
  ],
  linkSmartContract: "https://etherscan.io/",
  account: "0x543EbD3F56B2b9848b246C689E0302dC06CcFa48",
  linkVote: "https://etherscan.io/",
  isVoted: true,
};

