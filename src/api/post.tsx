/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FetchSpecificPostApiPayload,
  FetchSpecificPostApiResponse,
  FetchPostsApiPayload,
  FetchPostsApiResponse,
  CreatePostApiResponse,
  CreatePostApiPayload,
  UpdatePostApiResponse,
  UpdatePostApiPayload,
  DeletePostApiResponse,
  DeletePostApiPayload,
} from "./postType";
import api from "./base";

const fetchPostsByTime = ({
  payload,
}: FetchPostsApiPayload): Promise<FetchPostsApiResponse> => {
  const { offset } = payload;
  return api.get(`api/v1/posts?offset=${offset * 10}&limit=10`);
};

const fetchPostById = ({
  payload,
}: FetchSpecificPostApiPayload): Promise<FetchSpecificPostApiResponse> => {
  const { postId } = payload;
  return api.get(`/api/v1/posts/${postId}`);
};

const createPost = ({
  payload,
}: CreatePostApiPayload): Promise<CreatePostApiResponse> => {
  const { userId, content, imageURL } = payload.post;
  return api.post(`/api/v1/posts`, {
    userId: userId,
    content: content,
    imageURL: imageURL,
  });
};

const updatePost = ({
  payload,
}: UpdatePostApiPayload): Promise<UpdatePostApiResponse> => {
  const { userId, postId, content, imageURL } = payload.post;
  return api.put(`/api/v1/posts/${postId}`, {
    userId: userId,
    content: content,
    imageURL: imageURL,
  });
};

const deletePost = ({
  payload,
}: DeletePostApiPayload): Promise<DeletePostApiResponse> => {
  const { postId } = payload;
  return api.delete(`/api/v1/posts/${postId}`);
};

export { deletePost, updatePost, createPost, fetchPostsByTime, fetchPostById };
