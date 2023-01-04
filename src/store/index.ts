import { configureStore } from "@reduxjs/toolkit";
import companiesSlice from "./companies-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
    search: searchSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
