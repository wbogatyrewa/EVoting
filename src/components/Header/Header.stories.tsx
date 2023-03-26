import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => 
  <Header {...args}></Header>

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  account: "0x543EbD3F56B2b9848b246C689E0302dC06CcFa48"
}

