import { createSlice } from "@reduxjs/toolkit";

export type SearchType = {
  experience: string | number;
  location: string;
  skill: string
}

const searchTerms: SearchType = {
  experience: "any",
  location: "any",
  skill: "any"
};

const initialState = {
  searchTerms,
  prevSearches: []
}

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    searchTerms(state, action) {
      state.searchTerms = action.payload;
    },
  },
});

export const searchSliceActions = searchSlice.actions;

export default searchSlice;
