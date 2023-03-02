import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomButton } from ".";

export default {
  title: "Buttons",
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => 
  <CustomButton {...args}>Проголосовать</CustomButton>

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary"
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};