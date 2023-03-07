import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VotingCard } from './VotingCard';

export default {
  title: "Cards",
  component: VotingCard,
} as ComponentMeta<typeof VotingCard>;

const Template: ComponentStory<typeof VotingCard> = (args) =>
  <VotingCard {...args} />

export const ActiveVotingCard = Template.bind({});
ActiveVotingCard.args = {
  name: "Чизбургер или чикенбургер?",
  startDateTime: new Date('March 1, 2023 03:24:00'),
  endDateTime: new Date('March 31, 2023 03:24:00'),
};

export const BeforeVotingCard = Template.bind({});
BeforeVotingCard.args = {
  name: "Чизбургер или чикенбургер?",
  startDateTime: new Date('March 30, 2023 03:24:00'),
  endDateTime: new Date('March 31, 2023 03:24:00'),
};

export const FinishedVotingCard = Template.bind({});
FinishedVotingCard.args = {
  name: "Чизбургер или чикенбургер?",
  startDateTime: new Date('March 1, 2023 03:24:00'),
  endDateTime: new Date('March 5, 2023 03:24:00'),
};