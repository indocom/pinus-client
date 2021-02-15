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
  const { postId, userId, description } = payload.comment;
  return api.post(`/api/v1/posts/${postId}/comments`, {
    userId: userId,
    description: description,
  });
};

const updatePostComment = ({
  payload,
}: UpdatePostCommentApiPayload): Promise<UpdatePostCommentApiResponse> => {
  const { postId, commentId, userId, description } = payload.comment;
  return api.put(`/api/v1/posts/${postId}/comments/${commentId}`, {
    userId: userId,
    description: description,
  });
};

const deletePostComment = ({
  payload,
}: DeletePostCommentApiPayload): Promise<DeletePostCommentApiResponse> => {
  const { postId, commentId } = payload;
  return api.delete(`/api/v1/posts/${postId}/comments/${commentId}`);
};

export {
  fetchPostComments,
  createPostComment,
  deletePostComment,
  updatePostComment,
};
