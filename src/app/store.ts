import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import counterReducer from '../features/counter/counter-slice';
import MainReducer from '../features/main-slice';
import { dogApiSlice } from '../features/dogs/dogs.api.slice';
import { grafanaApiSlice } from '../features/grafana/grafana.api.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    main: MainReducer,
    [dogApiSlice.reducerPath]: dogApiSlice.reducer,
    [grafanaApiSlice.reducerPath]: grafanaApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(grafanaApiSlice.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
