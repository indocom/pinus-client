import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import type { Router } from "next/router";
import Banner from "../Banner";
import Footer from "../Footer";
import { Header, Text } from "pinus-ui-library";
import { navLinks } from "./links";

interface OwnProps {
  title: string;
  description: string;
  bgImage?: string;
  subBanner?: boolean;
  renderSubcontent?: () => React.ReactNode;
  children: React.ReactNode;
  router: Router;
  renderBanner?: boolean;
  renderNavbar?: boolean;
}

const Page: React.FC<OwnProps> = ({
  title,
  description,
  bgImage,
  subBanner,
  renderSubcontent,
  children,
  router,
  renderBanner = true,
  renderNavbar = true,
}) => {
  const headers = navLinks.map((entry) => {
    return {
      label: <Text color="white"> {entry.title} </Text>,
      url: "/" + entry.slug,
    };
  });
  const homeLink = "./";
  return (
    <div className={`flex flex-col items-center overflow-hidden`}>
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
      <div className="absolute w-full flex flex-col items-center max-w-7xl bg-transparent">
        {renderNavbar && (
          <Header
            headerTitle={
              <Text fontSize="2xl" fontWeight="bold" color="black">
                PINUS
              </Text>
            }
            headers={headers}
            homeLink={homeLink}
            isLoginSupported={false}
          />
        )}
      </div>
      {renderBanner ? (
        <Banner
          title={title}
          description={description}
          bgImage={bgImage}
          subBanner={subBanner}
          renderSubcontent={renderSubcontent}
        />
      ) : null}
      <div className={`min-h-screen w-full`}>{children}</div>
      <Footer />
    </div>
  );
};

export default withRouter(Page);
