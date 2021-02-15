import { Post } from "../api/postType";
import { Comment } from "../api/commentType";

interface State {
  posts: StatePost;
  comments: StateComment;
}

interface StatePost {
  loading: boolean;
  hasErrors: boolean;
  posts: Post[];
}

interface StateComment {
  loading: boolean;
  hasErrors: boolean;
  comments: Comment[];
}

export type { State, StatePost, StateComment };
