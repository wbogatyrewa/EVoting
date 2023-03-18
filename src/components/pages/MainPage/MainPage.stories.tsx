import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPage } from './MainPage';
import { Header } from '../../Header';
import { Container } from '@mui/material';

export default {
  title: "Pages",
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) =>
<>
  <Header childrenButton="Авторизоваться" />
  <Container maxWidth="lg" sx={{
        marginTop: "32px",
        "@media (min-width: 1200px)": {
          maxWidth: '1128px'
        }
      }}>
    <MainPage />
  </Container>
</>


export const Votings = Template.bind({});

