import "tailwindcss/tailwind.css";
import Script from "next/script";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import { createWrapper } from "next-redux-wrapper";

import { initFirebase } from "src/firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import EnsureAuthLoaded from "src/components/Auth/EnsureAuthLoaded";
import { GTM_ID, pageview } from "lib/gtm";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <div className="App">
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <EnsureAuthLoaded>
              <Component {...pageProps} />
            </EnsureAuthLoaded>
          </ReactReduxFirebaseProvider>
        </Provider>
      </div>
    </>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
