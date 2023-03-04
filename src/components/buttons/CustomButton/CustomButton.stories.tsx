import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomButton } from ".";
import AddIcon from '@mui/icons-material/Add';

export default {
  title: "Buttons",
  component: CustomButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => 
  <CustomButton {...args}>Проголосовать</CustomButton>

export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
}

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "contained",
  color: "secondary"
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: "text",
  startIcon: <AddIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "contained",
  disabled: true,
};