interface comment {
  commentId?: number;
  postId: number;
  userId: string;
  description: string;
  postedAt: number;
  lastUpdatedAt: number;
}

interface fetchPostCommentsApiPayload {
  payload: {
    postId: number;
  };
}

interface fetchPostCommentsApiResponse {
  message: string;
  comments: comment[];
}

interface createPostCommentApiPayload {
  payload: {
    comment: comment;
  };
}

interface createPostCommentApiResponse {
  message: string;
  comments: comment;
}

interface updatePostCommentApiPayload {
  payload: {
    comment: comment;
  };
}

interface updatePostCommentApiResponse {
  message: string;
  comments: comment;
}

interface deletePostCommentApiPayload {
  payload: {
    commentId: number;
  };
}

interface deletePostCommentApiResponse {
  message: string;
  comments?: comment;
}

export type {
  fetchPostCommentsApiPayload,
  fetchPostCommentsApiResponse,
  createPostCommentApiResponse,
  createPostCommentApiPayload,
  updatePostCommentApiResponse,
  updatePostCommentApiPayload,
  deletePostCommentApiResponse,
  deletePostCommentApiPayload,
  comment,
};
