import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Field } from './Field';
import { CustomIconButton } from '../../buttons/CustomIconButton';

export default {
  title: "Inputs",
  component: Field,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) =>
  <Box maxWidth={500}>
    <Field {...args} />
  </Box>

export const SearchField = Template.bind({});
SearchField.args = {
  label: 'Название голосования',
  startAdornment: (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  ),
}

export const AnswerField = Template.bind({});
AnswerField.args = {
  label: 'Вариант ответа',
  helperText: 'Введите вариант ответа',
  endAdornment: (
    <InputAdornment position="end">
      <CustomIconButton>
        <HighlightOffIcon />
      </CustomIconButton>
    </InputAdornment>
  ),
}

