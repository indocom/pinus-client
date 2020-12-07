import React from "react";
import "tailwindcss/tailwind.css";

interface AppProps {
  Component;
  pageProps;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
