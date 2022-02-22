import { Asset, createClient, Entry } from "contentful-management";

// Several helper fns
const LOCALE = "en-US";

const generateRandomString = (length = 6) => {
  return Math.random().toString(20).substring(0, length);
};

const getSpace = () => {
  return createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  })
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
};

const getEnvironment = () => {
  return getSpace().then(space => space.getEnvironment("master"));
}

function createImage(file: File): Promise<Asset> {
  if (file == null) {
    return new Promise(null);
  }

  return getEnvironment().then(async env => env.createAssetFromFiles({
    fields: {
      title: {
        [LOCALE]: file.name
      }, 
      description: {
        [LOCALE]: null
      }, 
      file: {
        [LOCALE]: {
          file: await file.arrayBuffer(),
          contentType: "image", 
          fileName: file.name
        }
      }
    }
  }))
  .then((asset) => asset.processForAllLocales())
  .then((asset) => asset.publish())
  .catch(err => {
    console.error(err);
    return new Promise(null);
  });
}

function linkImageToContent(image: Asset, content: Entry) {
  content.fields.image = { [LOCALE]: {
    sys: {
      type: "Link", 
      linkType: "Asset", 
      id: image.sys.id
    }
  }};
  return content.update().then((entry) => entry.publish());
}

async function createContent(content: string, writerName: string, file: File) {
  const [imageAsset, contentEntry] = await Promise.all([
    createImage(file),
    getEnvironment()
    .then((env) => {
     const entryId = generateRandomString(22);
     return env.createEntryWithId(
       "content", // content type ID. Check contentful on the type's ID
       entryId,
       {
         fields: {
           text: {
             [LOCALE]: content,
           },
           writer: {
             [LOCALE]: writerName,
           },
         },
       }
     );
   })
  ]);

  if (imageAsset == null) {
    return contentEntry;
  }

  linkImageToContent(imageAsset, contentEntry);
  return contentEntry;
}

function getRecipient(recipientName: string) {
  return getEnvironment()
    .then((env) =>
      env.getEntries({
        content_type: "person",
      })
    )
    .then((entries) =>
      entries.items.filter(
        (entry) => entry.fields.name[LOCALE] === recipientName
      )
    )
    .then((entries) => {
      if (entries.length !== 1) {
        throw new Error(
          `There exists more than one match to ${recipientName} which is impossible. Aborting..`
        );
      }
      return entries[0];
    });
}

function linkContentToRecipient(contentEntry: Entry, recipientEntry: Entry) {
  if (recipientEntry.fields.content === undefined) {
    recipientEntry.fields.content = { [LOCALE]: [] };
  }
  recipientEntry.fields.content[LOCALE].push({
    sys: {
      type: "Link",
      linkType: "Entry",
      id: contentEntry.sys.id,
    },
  });

  return recipientEntry.update().then((entry) => entry.publish());
}

export async function createAndLink(
  writerName: string,
  recipientName: string,
  content: string, 
  image: File
) {
  const [contentEntry, recipientEntry] = await Promise.all([
    createContent(content, writerName, image),
    getRecipient(recipientName),
  ]);

  await contentEntry.publish();
  await linkContentToRecipient(contentEntry, recipientEntry);
}

export async function getPersons(): Promise<string[]> {
  return getEnvironment()
    .then((env) =>
      env.getEntries({
        content_type: "person",
        select: "fields.name",
      })
    )
    .then((entry) => entry.items.map((x) => x.fields.name[LOCALE]));
}

export async function getImage(assetId: string): Promise<Asset> {
  return getEnvironment()
    .then(env => env.getAsset(assetId));
}