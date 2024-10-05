import { createSlice } from "@reduxjs/toolkit";
import UsersThunk from "./users-thunk";

const initialState = {
  fetchUserSuccess: false,
  fetchUserLoading: false,
  usersData: [],
};

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state, payload: any) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(UsersThunk.getAllUsers.pending, (state) => {
        state.fetchUserSuccess = false;
        state.fetchUserLoading = true;
        // state.usersData = [];
      })
      .addCase(UsersThunk.getAllUsers.fulfilled, (state, action) => {
        state.fetchUserSuccess = true;
        state.fetchUserLoading = false;
        state.usersData = action.payload;
      })
      .addCase(UsersThunk.getAllUsers.rejected, (state) => {
        state.fetchUserSuccess = false;
        state.fetchUserLoading = false;
        state.usersData = [];
      });
  },
});

export default UsersSlice;
