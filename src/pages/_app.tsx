import App from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";

import store from "../redux/configureStore";
import { createWrapper } from "next-redux-wrapper";

interface AppProps {
  Component;
  pageProps;
}

// default component from Next JS
class MyApp extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
