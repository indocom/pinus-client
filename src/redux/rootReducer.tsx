import { combineReducers } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
