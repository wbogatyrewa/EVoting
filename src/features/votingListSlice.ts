import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Voting } from '../components/Types';

export interface VotingListState {
  value: Voting[];
}

const initialState: VotingListState = {
  value: [],
}

export const votingListSlice = createSlice({
  name: "votingList",
  initialState,
  reducers: {
    setVotingList: (state, action: PayloadAction<Voting[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setVotingList } = votingListSlice.actions;

export default votingListSlice.reducer;