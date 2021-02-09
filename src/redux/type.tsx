import { post } from "../api/postType";
import { comment } from "../api/commentType";

interface State {
  posts: StatePost;
  comments: StateComment;
}

interface StatePost {
  loading: boolean;
  hasErrors: boolean;
  posts: post[];
}

interface StateComment {
  loading: boolean;
  hasErrors: boolean;
  comments: comment[];
}

export type { State, StatePost, StateComment };
