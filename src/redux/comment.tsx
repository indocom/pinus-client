import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { comment } from "../api/commentType";
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

    const response = await fetchPostComments(payload);
    if (response.status < 300) {
      return response.data.comments;
    } else {
      throw new Error(response.problem);
    }
  }
);

const createPostsComment = createAsyncThunk(
  "comments/createCommentByPostId",
  async (comment: comment) => {
    const payload = {
      payload: {
        comment: comment,
      },
    };

    const response = await createPostComment(payload);
    if (response.status < 300) {
      return response.data.comments;
    } else {
      throw new Error(response.problem);
    }
  }
);

const updatePostsComment = createAsyncThunk(
  "comments/updateCommentByPostId",
  async (comment: comment) => {
    const payload = {
      payload: {
        comment: comment,
      },
    };

    const response = await updatePostComment(payload);
    if (response.status < 300) {
      return response.data.comments;
    } else {
      throw new Error(response.problem);
    }
  }
);

const deletePostsComment = createAsyncThunk(
  "comments/createCommentByPostId",
  async (commentId: number) => {
    const payload = {
      payload: {
        commentId: commentId,
      },
    };

    const response = await deletePostComment(payload);
    if (response.status < 300) {
      return response.data.comments;
    } else {
      throw new Error(response.problem);
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
