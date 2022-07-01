// Duck Pattern
import { createSlice } from '@reduxjs/toolkit';

interface MainState {
  isOpen: boolean;
}

const initialState: MainState = {
  isOpen: false, // for active default menu
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    toggleMenuOpen(state) {
      // eslint-disable-next-line no-param-reassign
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenuOpen } = mainSlice.actions;
export default mainSlice.reducer;
