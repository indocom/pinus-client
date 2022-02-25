import App from "next/app";
import "tailwindcss/tailwind.css";

import { Provider } from "react-redux";
import store from "../redux/configureStore";
import { createWrapper } from "next-redux-wrapper";

import { initFirebase } from "src/firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import EnsureAuthLoaded from "src/components/Auth/EnsureAuthLoaded";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      <HelmetProvider>
        <div className="App">
          <Helmet>
            <title>Perhimpunan Indonesia NUS | PINUS</title>
            <meta
              name="description"
              content="Fostering relationships among Indonesians in NUS, building bridges between Indonesians and NUS."
            />
          </Helmet>
          <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
              <EnsureAuthLoaded>
                <Component {...pageProps} />
              </EnsureAuthLoaded>
            </ReactReduxFirebaseProvider>
          </Provider>
        </div>
      </HelmetProvider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(ClientApp);
