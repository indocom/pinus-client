import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import type { Router } from "next/router";
import Banner from "../Banner";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface OwnProps {
  title: string;
  description: string;
  bgImage?: string;
  subBanner?: boolean;
  renderSubcontent?: () => React.ReactNode;
  children: React.ReactNode;
  router: Router;
<<<<<<< HEAD
  unrenderBanner?: boolean;
=======
>>>>>>> a230c3e3ce2f64718e8dad1d3e580c4e3de08ba8
}

const Page: React.FC<OwnProps> = ({
  title,
  description,
  bgImage,
  subBanner,
  renderSubcontent,
  children,
  router,
  unrenderBanner,
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />

        <meta property="og:url" content={router.pathname} key="ogurl" />
        <meta
          property="og:image"
          content={"/assets/icons/pinus.png"}
          key="ogimage"
        />
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
      <Navbar pathname={router.pathname} />
<<<<<<< HEAD
      {unrenderBanner ? null : (
=======
      {title != "Aksara" ? (
>>>>>>> a230c3e3ce2f64718e8dad1d3e580c4e3de08ba8
        <Banner
          title={title}
          description={description}
          bgImage={bgImage}
          subBanner={subBanner}
          renderSubcontent={renderSubcontent}
        />
<<<<<<< HEAD
      )}
=======
      ) : null}
>>>>>>> a230c3e3ce2f64718e8dad1d3e580c4e3de08ba8
      <div className={`min-h-screen w-full`}>{children}</div>
      <Footer />
    </>
  );
};

export default withRouter(Page);
