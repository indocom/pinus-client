/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "src/api/postType";
import { State, StatePost } from "./type";
import {
  createPost,
  updatePost,
  deletePost,
  fetchPostsByTime,
  fetchPostById,
} from "../api/post";

// using stub
import {
  Posts,
  ManusiaAddition,
  ModulusAddition,
  OpiniAddition,
} from "./postStub";

const postsInitialState = {
  loading: false,
  hasErrors: false,
  posts: Posts,
  filter: null,
  category: null,
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
    try {
      const response = await fetchPostsByTime(payload);
      return response.data.posts;
    } catch (error) {
      console.log(error);
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
    try {
      const response = await fetchPostById(payload);
      return response.data.post;
    } catch (error) {
      console.log(error);
    }
  }
);

const updatePostById = createAsyncThunk(
  "posts/updatePostById",
  async (post: Post) => {
    const payload = {
      payload: {
        post: post,
      },
    };
    try {
      const response = await updatePost(payload);
      return response.data.post;
    } catch (error) {
      console.log(error);
    }
  }
);

const createPostSpecific = createAsyncThunk(
  "posts/createPost",
  async (post: Post) => {
    const payload = {
      payload: {
        post: post,
      },
    };
    try {
      const response = await createPost(payload);
      return response.data.post;
    } catch (error) {
      console.log(error);
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
    try {
      const response = await deletePost(payload);
      return response.data.post;
    } catch (error) {
      console.log(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    // for load more stubs usage only
    loadPosts: (state, { payload }: PayloadAction<{ category: number }>) => {
      state.loading = true;
      //TODO : integrate this into real API by moving this into extra reducer
      try {
        switch (payload.category) {
          case 1:
            ManusiaAddition.forEach((item) => state.posts.push(item));
            break;
          case 2:
            OpiniAddition.forEach((item) => state.posts.push(item));
            break;
          case 3:
            ModulusAddition.forEach((item) => state.posts.push(item));
            break;
        }
      } catch (e) {
        console.log(e);
        state.hasErrors = true;
      } finally {
        state.loading = false;
      }

      state.loading = false;
    },
    setFilter: (state, { payload }: PayloadAction<{ filter: string }>) => {
      state.loading = true;
      //TODO : integrate this into real API by moving this into extra reducer
      try {
        state.filter = payload.filter;
      } catch (e) {
        console.log(e);
        state.hasErrors = true;
      } finally {
        state.loading = false;
      }

      state.loading = false;
    },
    setCategory: (state, { payload }: PayloadAction<{ category: number }>) => {
      state.loading = true;
      //TODO : integrate this into real API by moving this into extra reducer
      try {
        state.category = payload.category;
      } catch (e) {
        state.hasErrors = true;
      } finally {
        state.loading = false;
      }

      state.loading = false;
    },
  },
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
      // TODO, actually separated the post into three different section
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
export const postsSelector = (state: State): StatePost => {
  const filter = state.posts.filter;
  const category = state.posts.category;
  let post = state.posts.posts.slice();

  if (category !== null) {
    post = post.filter((p) => p.categoryId === category);
  }

  switch (filter) {
    case "createdAt":
      post = post.sort((a, b) => a.createdAt - b.createdAt);
      break;
    case "author":
      post = post.sort((a, b) => a.authorName.localeCompare(b.authorName));
      break;
    case "title":
      post = post.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  return {
    loading: state.posts.loading,
    hasErrors: state.posts.hasErrors,
    posts: post,
    filter: state.posts.filter,
    category: state.posts.category,
  };
};

// export stub action
export const {
  loadPosts: loadPostsActionCreator,
  setFilter: setFilter,
  setCategory: setCategory,
} = postsSlice.actions;

export {
  getPostsById,
  getPostsTime,
  updatePostById,
  createPostSpecific,
  deletePostSpecific,
};
// export actions and middleware
export default postsSlice.reducer;
