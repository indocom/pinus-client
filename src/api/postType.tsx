// can expand using categories
import { Payload } from "./type";
import { ApiResponse } from "apisauce";
export interface Post {
  postId?: number;
  content: string;
  imageURL: string | null;
  userId: string;
  postedAt?: number;
  lastUpdatedAt?: number;
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
