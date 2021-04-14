import { Post } from "../api/postType";
import { Comment } from "../api/commentType";

interface State {
  posts: StatePost;
  comments: StateComment;
  firebase: any;
}

interface StatePost {
  filter: string | null;
  category: number | null;
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
