import { useRouter } from "next/router";
import { KudosContent } from "src/pageContent/Kudos";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Page from "src/components/Page";
import { getPeopleSlugsFromKudoboard } from "src/utils/contentful/kudo";
import React from "react";
import { getImage } from "src/utils/contentful/images";
import { Asset } from "contentful";

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getPeopleSlugsFromKudoboard();

  const paths = docs.map((name) => {
    const slug = name.toLowerCase().replace(/ /g, "-");
    return {
      params: { slug },
    };
  });

  console.debug(`Generated static paths: ${JSON.stringify(paths)}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const backgroundImage = await getImage("admissions");

  if (!backgroundImage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      backgroundImage,
    },
    revalidate: 60, // seconds
  };
};

const KudosPerson: NextPage = ({
  backgroundImage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { slug } = router.query;
  let name: string = slug as string;

  name = name
    .split("-")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  const image = backgroundImage as Asset;
  const url = image.fields.file.url;

  return (
    <Page
      bgImageUrl={url}
      title={"Happy Graduation, " + name}
      subBanner
      description={`Hello ${name}, here are our well wishes for you! Hope you enjoyed your journey in NUS!`}
    >
      <div>
        <KudosContent person={slug} />
      </div>
    </Page>
  );
};

export default KudosPerson;
