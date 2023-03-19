import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../Header';
import { Container } from '@mui/material';
import { CreateVotingPage } from './CreateVotingPage';

export default {
  title: "Pages",
  component: CreateVotingPage,
} as ComponentMeta<typeof CreateVotingPage>;

const Template: ComponentStory<typeof CreateVotingPage> = (args) =>
<>
  <Header account="0x543EbD3F56B2b9848b246C689E0302dC06CcFa48" />
  <Container maxWidth="lg" sx={{
        marginTop: "32px",
        "@media (min-width: 1200px)": {
          maxWidth: '1128px'
        }
      }}>
    <CreateVotingPage />
  </Container>
</>


export const CreateVotings = Template.bind({});

