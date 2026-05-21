import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import credentialsReducer from './slices/credentialsSlice';
import applicationsReducer from './slices/applicationsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    credentials: credentialsReducer,
    applications: applicationsReducer,
  },
});