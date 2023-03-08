import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TransactionLink } from "./TransactionLink";

export default {
  title: "Links",
  component: TransactionLink,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof TransactionLink>;

const Template: ComponentStory<typeof TransactionLink> = (args) => 
  <TransactionLink {...args}>Смарт-контракт</TransactionLink>

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  link: "https://etherscan.io/"
}