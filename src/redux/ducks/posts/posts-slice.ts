import { createSlice } from "@reduxjs/toolkit";
import PostsThunk from "./posts-thunk";

const initialState = {
  fetchPostSuccess: false,
  fetchPostLoading: false,
  postsData: [],
  fetchStoriesLoading: false,
  fetchStoriesSuccess: false,
  storiesData: [],
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
      })
      .addCase(PostsThunk.getPostsByUserId.pending, (state) => {
        state.fetchStoriesLoading = true;
        state.fetchStoriesSuccess = false;
        state.storiesData = [];
      })
      .addCase(PostsThunk.getPostsByUserId.fulfilled, (state, action) => {
        state.fetchStoriesLoading = false;
        state.fetchStoriesSuccess = true;
        const data = action.payload;
        const lastThree = data.length > 3 ? data.slice(-3) : data;

        state.storiesData = lastThree;
      })
      .addCase(PostsThunk.getPostsByUserId.rejected, (state) => {
        state.fetchStoriesLoading = false;
        state.fetchStoriesSuccess = false;
        state.storiesData = [];
      });
  },
});

export default PostsSlice;
