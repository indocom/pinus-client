// can expand using categories
interface post {
  postId?: number;
  content: string;
  imageURL: string | null;
  userId: string;
  postedAt: number;
  lastUpdatedAt: number;
}

interface fetchPostsApiPayload {
  payload: {
    offset: number;
  };
}

interface fetchPostsApiResponse {
  posts: post[];
  message: string;
}

interface fetchSpecificPostApiPayload {
  payload: {
    postId: number;
  };
}

interface fetchSpecificPostApiResponse {
  posts: post;
  message: string;
}

interface createPostApiPayload {
  payload: {
    post: post;
  };
}

interface createPostApiResponse {
  posts: post;
  message: string;
}

interface updatePostApiPayload {
  payload: {
    post: post;
  };
}

interface updatePostApiResponse {
  posts: post;
  message: string;
}

interface deletePostApiPayload {
  payload: {
    postId: number;
  };
}

interface deletePostApiResponse {
  posts?: post;
  message: string;
}

export type {
  fetchPostsApiPayload,
  fetchPostsApiResponse,
  fetchSpecificPostApiPayload,
  fetchSpecificPostApiResponse,
  createPostApiResponse,
  createPostApiPayload,
  updatePostApiResponse,
  updatePostApiPayload,
  deletePostApiResponse,
  deletePostApiPayload,
  post,
};
