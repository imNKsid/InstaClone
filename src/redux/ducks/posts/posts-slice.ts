import { createSlice } from "@reduxjs/toolkit";
import PostsThunk from "./posts-thunk";

const initialState = {
  fetchPostSuccess: false,
  fetchPostLoading: false,
  postsData: [],
};

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state, payload: any) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(PostsThunk.getAllPosts.pending, (state) => {
        state.fetchPostSuccess = false;
        state.fetchPostLoading = true;
        state.postsData = [];
      })
      .addCase(PostsThunk.getAllPosts.fulfilled, (state, action) => {
        state.fetchPostSuccess = true;
        state.fetchPostLoading = false;
        state.postsData = action.payload;
      })
      .addCase(PostsThunk.getAllPosts.rejected, (state) => {
        state.fetchPostSuccess = false;
        state.fetchPostLoading = false;
        state.postsData = [];
      });
  },
});

export default PostsSlice;
