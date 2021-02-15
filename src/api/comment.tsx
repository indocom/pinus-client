/* eslint-disable @typescript-eslint/no-unused-vars */
import api from "./base";
import {
  FetchPostCommentsApiPayload,
  FetchPostCommentsApiResponse,
  CreatePostCommentApiResponse,
  CreatePostCommentApiPayload,
  UpdatePostCommentApiResponse,
  UpdatePostCommentApiPayload,
  DeletePostCommentApiResponse,
  DeletePostCommentApiPayload,
} from "./commentType";

const fetchPostComments = ({
  payload,
}: FetchPostCommentsApiPayload): Promise<FetchPostCommentsApiResponse> => {
  const { postId } = payload;
  return api.get(`/api/v1/posts/${postId}/comments?limit=9999`);
};

const createPostComment = ({
  payload,
}: CreatePostCommentApiPayload): Promise<CreatePostCommentApiResponse> => {
  const {
    postId,
    userId,
    description,
    postedAt,
    lastUpdatedAt,
  } = payload.comment;
  return api.post(`/api/v1/posts/${postId}/comments`, {
    userId: userId,
    description: description,
    postedAt: postedAt,
    lastUpdatedAt: lastUpdatedAt,
  });
};

const updatePostComment = ({
  payload,
}: UpdatePostCommentApiPayload): Promise<UpdatePostCommentApiResponse> => {
  const { commentId, userId, description, lastUpdatedAt } = payload.comment;
  return api.put(`/api/v1/posts/${postId}/comments/${commentId}`, {
    userId: userId,
    description: description,
    lastUpdatedAt: lastUpdatedAt,
  });
};

const deletePostComment = ({
  payload,
}: DeletePostCommentApiPayload): Promise<DeletePostCommentApiResponse> => {
  const { commentId } = payload;
  return api.delete(`/api/v1/posts/${postId}/comments/${commentId}`);
};

export {
  fetchPostComments,
  createPostComment,
  deletePostComment,
  updatePostComment,
};
