import { createClient as createClientWrite } from "contentful-management";
import { createClient as createClientRead } from "contentful";

export const LOCALE = "en-US";

export const generateRandomString = (length = 6) => {
  return Math.random().toString(20).substring(0, length);
};

export const getContentfulWriter = async () => {
  const client = createClientWrite({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  })
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment("master"));

  return client;
};

export const getContentfulReader = () => {
  const client = createClientRead({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  return client;
};
