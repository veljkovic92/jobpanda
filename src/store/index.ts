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

const persistConfig = {
  key: "root",
  storage: storage,
};

export const rootReducers = combineReducers({
  companies: companiesSlice.reducer,
    jobs: jobsSlice.reducer,
    search: searchSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export default store;
