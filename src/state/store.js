import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../state/slices/appSlice';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
