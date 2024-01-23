import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { jsonPlaceholderAPI } from '../api/';

export const store = configureStore({
    reducer: {
        [jsonPlaceholderAPI.reducerPath]: jsonPlaceholderAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jsonPlaceholderAPI.middleware),
});

setupListeners(store.dispatch);