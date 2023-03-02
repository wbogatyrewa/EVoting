import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomIconButton } from "./CustomIconButton";
import CloseIcon from '@mui/icons-material/Close';

export default {
  title: "Buttons",
  component: CustomIconButton,
} as ComponentMeta<typeof CustomIconButton>;

const Template: ComponentStory<typeof CustomIconButton> = (args) => 
  <CustomIconButton {...args}><CloseIcon /></CustomIconButton>

export const Close = Template.bind({});