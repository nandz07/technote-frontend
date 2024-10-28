// store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './api/apiSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from '../features/auth/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Persist config for the auth slice
const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'], // Only persist the 'token' field from auth state
};

// Wrap authReducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: persistedAuthReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check for redux-persist compatibility
        }).concat(apiSlice.middleware),
    devTools: true,
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
