// Duck Pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'couter',
  initialState,
  reducers: {
    // This works since immer maes it immutable under the hood.
    incremented(state) {
      state.value++;
    },

    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // decrenemt

    // reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
