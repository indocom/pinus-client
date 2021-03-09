import { combineReducers } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";
import postsSliceReducer from "./post";
import commentsSliceReducer from "./comment";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  posts: postsSliceReducer,
  comments: commentsSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
