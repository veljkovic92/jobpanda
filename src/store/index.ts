import { configureStore } from "@reduxjs/toolkit";
import companiesSlice from "./companies-slice";
import jobsSlice from "./jobs-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
    jobs: jobsSlice.reducer,
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
