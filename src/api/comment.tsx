import { ApiResponse } from "apisauce";
import api from "./base";
import {
  fetchPostCommentsApiPayload,
  fetchPostCommentsApiResponse,
  createPostCommentApiResponse,
  createPostCommentApiPayload,
  updatePostCommentApiResponse,
  updatePostCommentApiPayload,
  deletePostCommentApiResponse,
  deletePostCommentApiPayload,
} from "./commentType";

/**
 * Fetch all comments based on postId
 */
const fetchPostComments = ({
  payload,
}: fetchPostCommentsApiPayload): Promise<
  ApiResponse<fetchPostCommentsApiResponse>
> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { postId } = payload;
  return api.get("/api/v1/posts/${postId}/comments?limit=9999");
};

/**
 * Create a comment for a specific post
 */
const createPostComment = ({
  payload,
}: createPostCommentApiPayload): Promise<
  ApiResponse<createPostCommentApiResponse>
> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postId,
    userId,
    description,
    postedAt,
    lastUpdatedAt,
  } = payload.comment;
  return api.post("/api/v1/posts/${postId}/comments", {
    userId: userId,
    description: description,
    postedAt: postedAt,
    lastUpdatedAt: lastUpdatedAt,
  });
};

/**
 * Update a specific comment for a specific post
 */
const updatePostComment = ({
  payload,
}: updatePostCommentApiPayload): Promise<
  ApiResponse<updatePostCommentApiResponse>
> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { commentId, userId, description, lastUpdatedAt } = payload.comment;
  return api.put("/api/v1/posts/${postId}/comments/${commentId}", {
    userId: userId,
    description: description,
    lastUpdatedAt: lastUpdatedAt,
  });
};

/**
 * Delete a specific comment for a specific post
 */
const deletePostComment = ({
  payload,
}: deletePostCommentApiPayload): Promise<
  ApiResponse<deletePostCommentApiResponse>
> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { commentId } = payload;
  return api.delete("/api/v1/posts/${postId}/comments/${commentId}");
};
export {
  fetchPostComments,
  createPostComment,
  deletePostComment,
  updatePostComment,
};
