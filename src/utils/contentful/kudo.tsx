import { Asset, Entry } from "contentful-management";
import { Entry as GenericEntry } from "contentful";
import { generateRandomString, getContentfulReader, getContentfulWriter, LOCALE } from "src/utils/contentful/utils";

import { ClientKudo, ContentfulKudoBoard, ContentfulPerson } from "src/utils/contentful/types";

async function createImage(file: File): Promise<Asset> {
  if (file == null) {
    return new Promise<Asset>((resolved) => resolved(null));
  }

  return getContentfulWriter()
    .then(async (env) =>
      env.createAssetFromFiles({
        fields: {
          title: {
            [LOCALE]: file.name,
          },
          description: {
            [LOCALE]: null,
          },
          file: {
            [LOCALE]: {
              file: await file.arrayBuffer(),
              contentType: "image",
              fileName: file.name,
            },
          },
        },
      })
    )
    .then((asset) => asset.processForAllLocales())
    .then((asset) => asset.publish())
    .catch((err) => {
      console.error(err);
      return new Promise<Asset>((resolved) => resolved(null));
    });
}

async function linkImageToContent(image: Asset, content: Entry) {
  content.fields.image = {
    [LOCALE]: {
      sys: {
        type: "Link",
        linkType: "Asset",
        id: image.sys.id,
      },
    },
  };
  return content.update();
}

async function createContent(content: string, writerName: string, file: File) {
  const [imageAsset, contentEntry] = await Promise.all([
    createImage(file),
    getContentfulWriter().then((env) => {
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
    }),
  ]);

  if (imageAsset == null) {
    return contentEntry.publish();
  }

  return linkImageToContent(imageAsset, contentEntry).then((asset) =>
    asset.publish()
  );
}

async function linkContentToRecipient(
  contentEntry: Entry,
  recipientEntry: Entry
) {
  if (recipientEntry.fields.content == null) {
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

export async function createContentAndLink(
  writerName: string,
  recipientName: string,
  content: string,
  image: File
): Promise<Entry> {
  const [contentEntry, recipientEntry] = await Promise.all([
    createContent(content, writerName, image),
    getRecipient(recipientName),
  ]);

  return linkContentToRecipient(contentEntry, recipientEntry)
    .then((asset) => asset.publish())
    .catch((err) => {
      console.error(err);
      return null;
    });
}

export async function getYearfromKudoboard(): Promise<string[]> {
  const client = getContentfulReader();
  const res = await client.getEntries<ContentfulKudoBoard>({
    content_type: "kudoboard",
  });
  const years = res.items.map((board) => board.fields.year.toString());
  return years;
}
export async function getPeopleSlugsFromKudoboard(
  year: number
): Promise<string[]> {
  const client = getContentfulReader();

  const res = await client.getEntries<ContentfulKudoBoard>({
    content_type: "kudoboard",
    "fields.year": year,
  });
  const people = res.items.flatMap((board) => board.fields.people);
  return people.map((x) => x.fields.name);
}

export async function getPeopleFromKudoboardByYear(
  year: number
): Promise<GenericEntry<ContentfulPerson>[]> {
  const client = getContentfulReader();
  const res = await client.getEntries<ContentfulKudoBoard>({
    content_type: "kudoboard",
    select: "fields",
    "fields.year": year,
  });
  return res.items[0].fields.people;
}

export async function getPeopleKudos(
  person: string | string[]
): Promise<ClientKudo[]> {
  const client = getContentfulReader();

  const changeSlugToName = (slug) => {
    const str = slug.replace(/-/g, " ");
    const splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };
  const res = await client.getEntries<ContentfulPerson>({
    content_type: "person",
    "fields.name": changeSlugToName(person),
  });
  let contents = res?.items[0].fields?.content;
  contents = contents?.filter((x) => "fields" in x); // Remove any dangling pointer that only contains links

  if (contents === undefined) {
    return;
  }
  if (contents[0].fields === undefined) {
    return;
  }

  return contents
    .map((x) => x.fields)
    .map((kudo) => {
      return {
        text: kudo.text,
        writer: kudo.writer,
        image: kudo.image ?? null,
        imageUrl: kudo.image?.fields.file.url ?? null,
      };
    });
}

// Implemented this way to fetch less data
async function getRecipient(recipientName: string) {
  return getContentfulWriter()
    .then((env) =>
      env.getEntries({
        content_type: "person",
        "fields.name[match]": recipientName,
      })
    )
    .then((entries) => entries.items)
    .then((entries) => {
      return entries;
    })
    .then((entries) => {
      if (entries.length !== 1) {
        throw new Error(
          `There exists more / less than one match to ${recipientName} which is impossible. Aborting..`
        );
      }
      return entries[0];
    });
}
