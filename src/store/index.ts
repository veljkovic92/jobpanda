import { configureStore } from "@reduxjs/toolkit";
import companiesSlice from "./companies-slice";
import jobsSlice from "./jobs-slice";
import searchSlice from "./search-slice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { initializeApp } from "firebase/app";
import userSlice from "./user-slice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz7XbdjxdYN91d7JROtpyIoQ478iLK4GI",
  authDomain: "companies-b1edc.firebaseapp.com",
  databaseURL:
    "https://companies-b1edc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "companies-b1edc",
  storageBucket: "companies-b1edc.appspot.com",
  messagingSenderId: "921696104020",
  appId: "1:921696104020:web:de11c59c6f2efbefc1c7c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const persistConfig = {
  key: "root",
  storage: storage,
};

export const rootReducers = combineReducers({
  companies: companiesSlice.reducer,
  jobs: jobsSlice.reducer,
  search: searchSlice.reducer,
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;
