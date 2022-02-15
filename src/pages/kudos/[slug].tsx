import { useRouter } from 'next/router'
import KudosContent from 'src/pageContent/Kudos'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Page from 'src/components/Page'
import { getPeopleKudos, getPeopleSlugsFromKudoboard } from 'src/utils/contentful/kudo_read'

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getPeopleSlugsFromKudoboard();

  const paths = docs.map((name) => {
    const slug = name.toLowerCase().replace(/ /g, '-');
    return {
      params: {slug}
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
  if(contents === undefined) {
    return { props:{}};
  }
  return {
    props: {
      contents
    }
  };
}


const KudosPerson : NextPage = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Page
      bgImage=""
      title="Kudos"
      subBanner
      description={`Hello ${slug}, kudos for you are down below !`}
    >
      <div>
        <KudosContent kudos = {props} person= {slug}/>
      </div>
    </Page>
      
  )
}

export default KudosPerson;