import { createClient } from "contentful";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getItems() {
  const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  });

  // TODO: Change the Trial 1 to some legit entry
  const content_type = "trial1";
  const res = await client.getEntries({ content_type: content_type });

  if (res.items) return res.items;
  console.log(`Error getting entries for ${content_type}`);
}

interface Entry {
  // eslint-disable-next-line
  [key: string]: any;
}

const CmsContent: React.FC = () => {
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

export default CmsContent;
