import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPage } from './MainPage';

export default {
  title: "Pages",
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) =>
  <MainPage />


export const Votings = Template.bind({});

