import { configureStore } from "@reduxjs/toolkit";
import companiesSlice from "./companies-slice";

const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
