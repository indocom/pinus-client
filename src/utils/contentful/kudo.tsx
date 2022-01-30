import { createClient, Entry } from "contentful-management";

const generateRandomString = (length = 6) => {
  return Math.random().toString(20).substring(2, length);
};

export async function createPerson(personName: string): Promise<Entry> {
  const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  });

  return client
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment("master"))
    .then((env) => {
      const entryId = generateRandomString(10);
      return env.createEntryWithId(
        "person", // content type ID. Check contentful on the type's ID
        entryId,
        {
          fields: {
            name: {
              "en-US": personName,
            },
          },
        }
      );
    })
    .then((entry) => entry.publish());
}
