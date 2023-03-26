import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AccountState {
  value: string;
}

const initialState: AccountState = {
  value: "",
}

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;