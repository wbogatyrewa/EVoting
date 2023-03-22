import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../Header';
import { AboutVotingPage } from './AboutVotingPage';
import { Container } from '@mui/material';

export default {
  title: "Pages",
  component: AboutVotingPage,
} as ComponentMeta<typeof AboutVotingPage>;

const Template: ComponentStory<typeof AboutVotingPage> = (args) =>
<>
  <Header childrenButton="Авторизоваться" />
  <Container maxWidth="lg" sx={{
        marginTop: "32px",
        "@media (min-width: 1200px)": {
          maxWidth: '1128px'
        }
      }}>
    <AboutVotingPage 
      title={'Чизбургер или чикенбургер?'} 
      startDateTime={new Date('March 1, 2023 03:24:00')} 
      endDateTime={new Date('March 31, 2023 03:24:00')} 
      link={'https://etherscan.io/'} 
      answers={[
        { label: 'Чизбургер' }, 
        { label: 'Чикенбургер' }
      ]}  />
  </Container>
</>


export const AboutVoting = Template.bind({});

