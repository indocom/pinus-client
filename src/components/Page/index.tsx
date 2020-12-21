import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import type { Router } from "next/router";
import Banner from "../Banner";
import Footer from "../Footer";

interface OwnProps {
  title: string;
  description: string;
  bgImage?: string;
  children: React.ReactNode;
  router: Router;
}

const Page: React.FC<OwnProps> = ({
  title,
  description,
  bgImage,
  children,
  router,
}) => {
  return (
    <div className={`flex flex-col w-screen`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />

        <meta property="og:url" content={router.pathname} key="ogurl" />
        <meta property="og:image" content={bgImage} key="ogimage" />
        <meta
          property="og:site_name"
          content="Perhimpunan Indonesia NUS"
          key="ogsitename"
        />
        <meta property="og:title" content={`${title} | PINUS`} key="ogtitle" />
        <meta
          property="og:description"
          content={description}
          key="ogdescription"
        />
        <title>{`${title} | PINUS`}</title>
      </Head>
      <body>
        <Banner title={title} description={description} bgImage={bgImage} />
        <div className={`min-h-screen w-full`}>{children}</div>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default withRouter(Page);
