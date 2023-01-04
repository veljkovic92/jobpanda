import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: { searchTerm: null, prevSearches: [] },
  reducers: {
    searchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const searchSliceActions = searchSlice.actions;

export default searchSlice;
