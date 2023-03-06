import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatusChip } from './StatusChip';

export default {
  title: "Cards",
  component: StatusChip,
} as ComponentMeta<typeof StatusChip>;

const Template: ComponentStory<typeof StatusChip> = (args) =>
  <StatusChip {...args} />

export const VotingInProgress = Template.bind({});
VotingInProgress.args = {
  label: "Идет голосование",
  color: "success",
  onDelete: undefined,
};

export const ComingSoon = Template.bind({});
ComingSoon.args = {
  label: "Скоро начнется",
  color: "info",
  onDelete: undefined,
};