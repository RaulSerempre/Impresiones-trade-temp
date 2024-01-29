import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { persistReducer, persistStore } from 'redux-persist';
import GeneralReducer from "../reducers/general";

const createNoopStorage = () => {
    return {
       getItem(_key: any) {
          return Promise.resolve(null);
       },
       setItem(_key: any, value: any) {
          return Promise.resolve(value);
       },
       removeItem(_key: any) {
          return Promise.resolve();
       },
    };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const reducers = combineReducers({
    general: GeneralReducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export type RootState = ReturnType<typeof reducers>

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)
