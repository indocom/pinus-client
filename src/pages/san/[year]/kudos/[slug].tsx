import { useRouter } from "next/router";
import { KudosContent } from "src/pageContent/Kudos";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Page from "src/components/Page";
import { getPeopleFromKudoboard, getPeopleSlugsFromKudoboard, getYearfromKudoboard } from "src/utils/contentful/kudo";
import React from "react";
import { getImage } from "src/utils/contentful/images";
import { Asset } from "contentful";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getYearfromKudoboard();
  const year_slug = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    const people = await getPeopleSlugsFromKudoboard(parseInt(item));
    year_slug.push(people.map(person => [parseInt(item), person]));
  } 
  const flattenedYearSlug = year_slug.flatMap(x=>x);
  const paths = flattenedYearSlug.map((tuple) => {
    const year:string = tuple[0].toString();
    const name:string = tuple[1];
    const slug = name.toLowerCase().replace(/ /g, "-");
    return {
      params: {slug, year},
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
