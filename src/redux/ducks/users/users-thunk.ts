import { createAsyncThunk } from "@reduxjs/toolkit";
import UsersService from "./users-service";

const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async (_, { rejectWithValue, dispatch }) => {
    const res = (await UsersService.getRequest("user")) as any;

    // console.log("getAllUsers res =>", JSON.stringify(res));

    if (
      res?.data &&
      res?.status === 200 &&
      res.data?.data &&
      res.data.data.length > 0
    ) {
      return res.data.data;
    }
    return [];
  }
);

const UsersThunk = {
  getAllUsers,
};

export default UsersThunk;
