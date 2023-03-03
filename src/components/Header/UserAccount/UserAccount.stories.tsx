import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserAccount } from './UserAccount';
import { MetaMaskIcon } from '../../icons';

export default {
  title: "Header",
  component: UserAccount,
} as ComponentMeta<typeof UserAccount>;

const Template: ComponentStory<typeof UserAccount> = (args) => <UserAccount {...args} />

export const User = Template.bind({});
User.args = {
  icon: <MetaMaskIcon />,
  account: "0x543EbD3F56B2b9848b246C689E0302dC06CcFa48"
}
