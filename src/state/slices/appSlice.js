import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    darkMode: null,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode } = appSlice.actions;
export const darkModeActive = state => state.app.darkMode;
export default appSlice.reducer;
