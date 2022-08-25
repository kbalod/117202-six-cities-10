import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../service/api';
import { rootReducer } from './rootReducer';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});
