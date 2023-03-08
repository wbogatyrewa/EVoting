import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AboutVotingCard } from './AboutVotingCard';

export default {
  title: "Cards/About",
  component: AboutVotingCard,
} as ComponentMeta<typeof AboutVotingCard>;

const Template: ComponentStory<typeof AboutVotingCard> = (args) =>
  <AboutVotingCard {...args} />

export const Active = Template.bind({});
Active.args = {
  startDateTime: new Date('March 1, 2023 03:24:00'),
  endDateTime: new Date('March 31, 2023 03:24:00'),
  link: "https://etherscan.io/"
};

export const Before = Template.bind({});
Before.args = {
  startDateTime: new Date('March 30, 2023 03:24:00'),
  endDateTime: new Date('March 31, 2023 03:24:00'),
  link: "https://etherscan.io/"
};

export const FinishedVotingCard = Template.bind({});
FinishedVotingCard.args = {
  startDateTime: new Date('March 1, 2023 03:24:00'),
  endDateTime: new Date('March 5, 2023 03:24:00'),
  link: "https://etherscan.io/"
};