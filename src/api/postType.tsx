// can expand using categories
import { Payload } from "./type";
import { ApiResponse } from "apisauce";

export interface Post {
  id?: number;
  authorId: number;
  authorName: string;
  title: string;
  description: string;
  body: string;
  imageURL?: string;
  categoryId: number;
  // for now, 1 is Manusia, 2 is Opini, 3 is Modulus
  createdAt?: number;
  updatedAt?: number;
}

interface PostObject {
  post: Post;
}

interface FetchPosts {
  offset: number;
}

interface FetchPostsResponse {
  posts: Post[];
}

export type FetchPostsApiPayload = Payload<FetchPosts>;
export type FetchPostsApiResponse = ApiResponse<FetchPostsResponse>;

interface FetchSpecificPost {
  postId: number;
}

export type FetchSpecificPostApiPayload = Payload<FetchSpecificPost>;
export type FetchSpecificPostApiResponse = ApiResponse<PostObject>;

export type CreatePostApiPayload = Payload<PostObject>;
export type CreatePostApiResponse = ApiResponse<PostObject>;

export type UpdatePostApiPayload = Payload<PostObject>;
export type UpdatePostApiResponse = ApiResponse<PostObject>;

interface DeletePost {
  postId: number;
}

export type DeletePostApiPayload = Payload<DeletePost>;
export type DeletePostApiResponse = ApiResponse<PostObject>;
