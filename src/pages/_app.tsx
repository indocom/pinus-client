import App from "next/app";
import "tailwindcss/tailwind.css";

import { Provider } from "react-redux";
import store from "../redux/configureStore";
import { createWrapper } from "next-redux-wrapper";

import { initFirebase } from "src/firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import EnsureAuthLoaded from "src/components/Auth/EnsureAuthLoaded";

export function isOnProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

const rrfProps = {
  firebase: initFirebase(isOnProduction()),
  config: {},
  dispatch: store.dispatch,
};

interface AppProps {
  Component;
  pageProps;
}

// default component from Next JS
class ClientApp extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;

    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <EnsureAuthLoaded>
            <Component {...pageProps} />
          </EnsureAuthLoaded>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(ClientApp);
