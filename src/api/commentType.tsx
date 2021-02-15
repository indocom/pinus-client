import { Payload } from "./type";
import { ApiResponse } from "apisauce";
export interface Comment {
  commentId?: number;
  postId: number;
  userId: string;
  description: string;
  postedAt?: number;
  lastUpdatedAt?: number;
}

interface CommentObject {
  comment: Comment;
}

interface FetchPostComments {
  postId: number;
}

export type FetchPostCommentsApiPayload = Payload<FetchPostComments>;

interface FetchPostCommentsResponse {
  comments: Comment[];
}

export type FetchPostCommentsApiResponse = ApiResponse<FetchPostCommentsResponse>;

export type CreatePostCommentApiPayload = Payload<CommentObject>;
export type CreatePostCommentApiResponse = ApiResponse<CommentObject>;

interface UpdatePostComment extends CommentObject {
  postId: number;
}

export type UpdatePostCommentApiPayload = Payload<UpdatePostComment>;
export type UpdatePostCommentApiResponse = ApiResponse<CommentObject>;

interface DeletePostComment {
  commentId: number;
  postId: number;
}

export type DeletePostCommentApiPayload = Payload<DeletePostComment>;
export type DeletePostCommentApiResponse = ApiResponse<CommentObject>;
