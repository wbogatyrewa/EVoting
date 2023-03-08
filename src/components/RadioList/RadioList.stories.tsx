import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioList } from './RadioList';
import { Box } from '@mui/material';

export default {
  title: "Lists",
  component: RadioList,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof RadioList>;

const Template: ComponentStory<typeof RadioList> = (args) =>
  <Box maxWidth={300}>
    <RadioList {...args} />
  </Box>

export const AnswerOptions = Template.bind({});
AnswerOptions.args = {
  label: 'Варианты ответов',
  radioList: [
    { label: 'Чизбургер' }, 
    { label: 'Чикенбургер' }
  ]
}

export const ResultVoting = Template.bind({});
ResultVoting.args = {
  label: 'Варианты ответов',
  radioList: [
    { label: 'Чизбургер', result: 75 }, 
    { label: 'Чикенбургер', result: 25 }
  ]
}

