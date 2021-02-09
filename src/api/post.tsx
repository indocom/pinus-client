import {
  fetchSpecificPostApiPayload,
  fetchSpecificPostApiResponse,
  fetchPostsApiPayload,
  fetchPostsApiResponse,
  createPostApiResponse,
  createPostApiPayload,
  updatePostApiResponse,
  updatePostApiPayload,
  deletePostApiResponse,
  deletePostApiPayload,
} from "./postType";
import { ApiResponse } from "apisauce";
import api from "./base";

/**
 * Fetch posts 10 posts each time based on updated at
 */
const fetchPostsByTime = ({
  payload,
}: fetchPostsApiPayload): Promise<ApiResponse<fetchPostsApiResponse>> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { offset } = payload;
  return api.get("api/v1/posts?offset=${offset*10}&limit=10");
};

const fetchPostById = ({
  payload,
}: fetchSpecificPostApiPayload): Promise<
  ApiResponse<fetchSpecificPostApiResponse>
> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { postId } = payload;
  return api.get("/api/v1/posts/${postId}");
};

/**
 * Create one individual post
 */
const createPost = ({
  payload,
}: createPostApiPayload): Promise<ApiResponse<createPostApiResponse>> => {
  const { userId, content, imageURL, postedAt, lastUpdatedAt } = payload.post;
  return api.post("/api/v1/posts", {
    userId: userId,
    content: content,
    imageURL: imageURL,
    postedAt: postedAt,
    lastUpdatedAt: lastUpdatedAt,
  });
};

/**
 * Update one individual post
 */
const updatePost = ({
  payload,
}: updatePostApiPayload): Promise<ApiResponse<updatePostApiResponse>> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userId, postId, content, imageURL, lastUpdatedAt } = payload.post;
  return api.put("/api/v1/posts/${postId}", {
    userId: userId,
    content: content,
    imageURL: imageURL,
    lastUpdatedAt: lastUpdatedAt,
  });
};

/**
 * Delete one individual post
 */
const deletePost = ({
  payload,
}: deletePostApiPayload): Promise<ApiResponse<deletePostApiResponse>> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { postId } = payload;
  return api.delete("/api/v1/posts/${postId}");
};

export { deletePost, updatePost, createPost, fetchPostsByTime, fetchPostById };
