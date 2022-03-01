import { useRouter } from "next/router";
<<<<<<< HEAD
import KudosContent from "src/pageContent/Kudos";
=======
import { KudosContent } from "src/pageContent/Kudos";
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Page from "src/components/Page";
import {
  getPeopleKudos,
  getPeopleSlugsFromKudoboard,
<<<<<<< HEAD
} from "src/utils/contentful/kudo_read";
=======
} from "src/utils/contentful/kudo";
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const name = params.slug;
  const contents = await getPeopleKudos(name);
  if (contents === undefined) {
    return { props: {} };
  }
  return {
    props: {
      contents,
    },
  };
};

const KudosPerson: NextPage = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  let name: string = slug as string;
  name = name
    .split("-")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return (
    <Page
      bgImage="admissions"
      title={"Happy Graduation, " + name}
      subBanner
      description={`Hello ${name}, here are our well wishes for you! Hope you enjoyed your journey in NUS!`}
    >
      <div>
        <KudosContent kudos={props} person={slug} />
      </div>
    </Page>
  );
};

export default KudosPerson;
