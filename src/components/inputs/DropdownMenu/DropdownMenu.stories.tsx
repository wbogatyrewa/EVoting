import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';
import { Box } from '@mui/material';

export default {
  title: "Inputs",
  component: DropdownMenu,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) =>
  <Box maxWidth={220}>
    <DropdownMenu {...args} />
  </Box>

export const SelectWithItems = Template.bind({});
SelectWithItems.args = {
  label: 'Выберите статус',
  menuItems: ['Идет голосование', 'Скоро начнется', 'Завершено']
}

