import { createClient as createClientWrite } from "contentful-management";
import { createClient as createClientRead } from "contentful";

export const LOCALE = "en-US";
export const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === "TRUE";
// The default cdn has more rate limit, but it caches the result causing it to not being updated immediately
export const PREVIEW_HOST_NO_CACHE = "preview.contentful.com";
export const DEFAULT_HOST = "cdn.contentful.com";
const environment = isProduction ? "master" : "development";

export const generateRandomString = (length = 6) => {
  return Math.random().toString(20).substring(0, length);
};

export const getContentfulWriter = async () => {
  return createClientWrite({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  })
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(environment));
};

export const getContentfulReader = (host = DEFAULT_HOST) => {
  const accessToken =
    host === DEFAULT_HOST
      ? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
      : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_PREVIEW_KEY;
  return createClientRead({
    host: host,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: accessToken,
    environment: environment,
  });
};
