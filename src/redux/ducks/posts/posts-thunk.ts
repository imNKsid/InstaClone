import { createAsyncThunk } from "@reduxjs/toolkit";
import PostsService from "./posts-service";

const getAllPosts = createAsyncThunk(
  "getAllPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = (await PostsService.getRequest("post")) as any;

    // console.log("getAllPosts res =>", JSON.stringify(res));

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

const getPostsByUserId = createAsyncThunk(
  "getPostsByUserId",
  async (id: string, { rejectWithValue, dispatch }) => {
    const res = (await PostsService.getRequest(`user/${id}/post`)) as any;

    // console.log("getPostsByUserId res =>", JSON.stringify(res));

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

const PostsThunk = {
  getAllPosts,
  getPostsByUserId,
};

export default PostsThunk;
