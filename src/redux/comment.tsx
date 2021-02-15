/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Comment } from "../api/commentType";
import { State, StateComment } from "./type";
import {
  fetchPostComments,
  createPostComment,
  deletePostComment,
  updatePostComment,
} from "../api/comment";

const commentsInitialState = {
  loading: false,
  hasErrors: false,
  comments: [],
};

const getPostsComments = createAsyncThunk(
  "comments/getCommentsById",
  async (postId: number) => {
    const payload = {
      payload: {
        postId: postId,
      },
    };

    try {
      const response = await fetchPostComments(payload);
      return response.data.comments;
    } catch (error) {
      console.log(error); // may be would better to log them once there is logger
    }
  }
);

const createPostsComment = createAsyncThunk(
  "comments/createCommentByPostId",
  async (data: { comment: Comment; postId: number }) => {
    const payload = {
      payload: data,
    };

    try {
      const response = await createPostComment(payload);
      return response.data.comment;
    } catch (error) {
      console.log(error);
    }
  }
);

const updatePostsComment = createAsyncThunk(
  "comments/updateCommentByPostId",
  async (data: { comment: Comment; postId: number }) => {
    const payload = {
      payload: data,
    };
    try {
      const response = await updatePostComment(payload);
      return response.data.comment;
    } catch (error) {
      console.log(error);
    }
  }
);

const deletePostsComment = createAsyncThunk(
  "comments/createCommentByPostId",
  async (data: { commentId: number; postId: number }) => {
    const payload = {
      payload: data,
    };
    try {
      const response = await deletePostComment(payload);
      return response.data.comment;
    } catch (error) {
      console.log(error);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsInitialState,
  reducers: {},
  extraReducers: {
    [getPostsComments.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getPostsComments.fulfilled.type]: (state, action) => {
      state.comments = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [getPostsComments.rejected.type]: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
    },
    [createPostsComment.pending.type]: (state, action) => {
      state.loading = true;
    },
    [createPostsComment.fulfilled.type]: (state, action) => {
      state.comments.push(action.payload);
      state.loading = false;
      state.hasErrors = false;
    },
    [createPostsComment.rejected.type]: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
    },
    [updatePostsComment.pending.type]: (state, action) => {
      state.loading = true;
    },
    [updatePostsComment.fulfilled.type]: (state, action) => {
      const newComment = action.payload;
      const index = state.comments.findIndex(
        (comment) => comment.commentId === newComment.id
      );
      state.comments[index] = newComment;
      state.loading = false;
      state.hasErrors = false;
    },
    [updatePostsComment.rejected.type]: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
    },
    [deletePostsComment.pending.type]: (state, action) => {
      state.loading = true;
    },
    [deletePostsComment.fulfilled.type]: (state, action) => {
      const newComment = action.payload;
      const index = state.comments.findIndex(
        (comment) => comment.commentId === newComment.id
      );
      state.comments.splice(index, 1);
      state.loading = false;
      state.hasErrors = false;
    },
    [deletePostsComment.rejected.type]: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// export selectors
export const commentsSelector = (state: State): StateComment => state.comments;

export {
  getPostsComments,
  createPostsComment,
  updatePostsComment,
  deletePostsComment,
};
// export actions and middleware
export default commentsSlice.reducer;
