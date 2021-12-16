import { createClient } from "contentful";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getItems() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "trial1" });

  return res.items;
}

interface Entry {
  // eslint-disable-next-line
  [key: string]: any;
}

const Cms: React.FC = () => {
  React.useEffect(() => {
    async function getData() {
      const res = await getItems();
      setData(res);
    }
    getData();
  }, []);

  const [data, setData] = React.useState<Array<Entry>>();
  if (!data) {
    return <div></div>;
  }
  console.log(data);
  return (
    <div>
      {data.map((post: Entry) => (
        <div>
          <div key={post.sys.id}>{post.fields.title}</div>
          <div> {documentToReactComponents(post.fields.trialRichText)}</div>
        </div>
      ))}
    </div>
  );
};

export default Cms;
