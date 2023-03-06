import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import { DateTimeField } from './DateTimeField'; 

export default {
  title: "Inputs",
  component: DateTimeField,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof DateTimeField>;

const Template: ComponentStory<typeof DateTimeField> = (args) =>
  <Box maxWidth={300}>
    <DateTimeField {...args}/>
  </Box>

export const DateTime = Template.bind({});
DateTime.args = {
  label: "Начало",
}
