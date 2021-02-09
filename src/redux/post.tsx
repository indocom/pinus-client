import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "../api/postType";
import { State, StatePost } from "./type";
import {
  createPost,
  updatePost,
  deletePost,
  fetchPostsByTime,
  fetchPostById,
} from "../api/post";

const postsInitialState = {
  loading: false,
  hasErrors: false,
  posts: [],
};

// error handling can be done in dispatch
const getPostsTime = createAsyncThunk(
  "posts/fetchPostsByTime",
  async (offset: number) => {
    const payload = {
      payload: {
        offset: offset,
      },
    };

    const response = await fetchPostsByTime(payload);
    if (response.status < 300) {
      return response.data.posts;
    } else {
      throw new Error(response.problem);
    }
  }
);

const getPostsById = createAsyncThunk(
  "posts/fetchPostsbyId",
  async (postId: number) => {
    const payload = {
      payload: {
        postId: postId,
      },
    };
    const response = await fetchPostById(payload);
    if (response.status < 300) {
      return response.data.posts;
    } else {
      throw new Error(response.problem);
    }
  }
);

const updatePostById = createAsyncThunk(
  "posts/updatePostById",
  async (post: post) => {
    const payload = {
      payload: {
        post: post,
      },
    };
    const response = await updatePost(payload);
    if (response.status < 300) {
      return response.data.posts;
    } else {
      throw new Error(response.problem);
    }
  }
);

const createPostSpecific = createAsyncThunk(
  "posts/createPost",
  async (post: post) => {
    const payload = {
      payload: {
        post: post,
      },
    };
    const response = await createPost(payload);
    if (response.status < 300) {
      return response.data.posts;
    } else {
      throw new Error(response.problem);
    }
  }
);

const deletePostSpecific = createAsyncThunk(
  "posts/deletePost",
  async (postId: number) => {
    const payload = {
      payload: {
        postId: postId,
      },
    };
    const response = await deletePost(payload);
    if (response.ok) {
      return response.data.posts;
    } else {
      throw new Error(response.problem);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {},
  extraReducers: {
    [getPostsTime.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getPostsTime.fulfilled.type]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [getPostsTime.rejected.type]: (state, action) => {
      state.hasErrors = true;
      state.loading = false;
    },
    [getPostsById.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getPostsById.fulfilled.type]: (state, action) => {
      const newPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === newPost.id);
      if (index === -1) {
        state.posts.push(newPost);
      }

      state.loading = false;
      state.hasErrors = true;
    },
    [getPostsById.rejected.type]: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
    },
    [updatePostById.pending.type]: (state, action) => {
      state.loading = true;
    },
    [updatePostById.fulfilled.type]: (state, action) => {
      const newPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === newPost.id);

      state.posts[index] = newPost;
      state.loading = false;
      state.hasErrors = false;
    },
    [updatePostById.rejected.type]: (state, action) => {
      state.loading = false;
      state.hasErrors = false;
    },
    [createPostSpecific.pending.type]: (state, action) => {
      state.loading = true;
    },
    [createPostSpecific.fulfilled.type]: (state, action) => {
      state.posts.push(action.payload);
      state.loading = true;
      state.hasErrors = false;
    },
    [createPostSpecific.rejected.type]: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
    },
    [deletePostSpecific.pending.type]: (state, action) => {
      state.loading = true;
    },
    [deletePostSpecific.fulfilled.type]: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.postId
      );
      state.posts.splice(index, 0);
      state.loading = false;
      state.hasErrors = false;
    },
    [deletePostSpecific.rejected.type]: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// export selectors
export const postsSelector = (state: State): StatePost => state.posts;

export {
  getPostsById,
  getPostsTime,
  updatePostById,
  createPostSpecific,
  deletePostSpecific,
};
// export actions and middleware
export default postsSlice.reducer;
