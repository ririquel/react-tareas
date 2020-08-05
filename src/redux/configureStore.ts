// configureStore.js

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {useDispatch} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';

const persistConfig = {
    key: 'root04',
    storage: AsyncStorage,
    timeout: 0,
    // whitelist: [], se guardan las pruebas los datos persisten
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [],
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
