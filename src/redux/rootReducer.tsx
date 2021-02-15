import { combineReducers } from "@reduxjs/toolkit";
import postsSliceReducer from "./post";
import commentsSliceReducer from "./comment";

const rootReducer = combineReducers({
  posts: postsSliceReducer,
  comments: commentsSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
