import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isLoggedIn: boolean;
  uid: string;
  userName: string;
  email: string;
  phone: string;
};

const initialState: InitialState = {
  isLoggedIn: false,
  uid: "",
  userName: "",
  email: "",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginCurrentUser(state, action) {
      state.isLoggedIn = true;
      state.uid = action.payload.uid;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    logoutCurrentUser(state, action) {
      state.isLoggedIn = false;
      state.uid = "";
      state.userName = "";
      state.email = "";
      state.phone = "";
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice;
