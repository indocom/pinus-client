import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { actionTypes } from "react-redux-firebase";
import rootReducer from "./rootReducer";

const defaultMiddlewareOptions = {
  serializableCheck: {
    ignoredActions: [
      ...Object.keys(actionTypes).map((type) => `@@reactReduxFirebase/${type}`),
    ],
    ignoredPaths: ["firebase"],
  },
};

const middleware = [...getDefaultMiddleware(defaultMiddlewareOptions), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
});

/* eslint @typescript-eslint/no-var-requires: "off" */
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
