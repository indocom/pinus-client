import { BasePromise, handlePromise } from "./promise";
import { isOnProduction } from ".";
import {
  DEVELOPMENT_SERVER_BASE_URL,
  PRODUCTION_SERVER_BASE_URL,
} from "./constants";

type JsonPromise = BasePromise<Record<string, unknown>>;

function getServerBaseUrl(): string {
  return isOnProduction()
    ? PRODUCTION_SERVER_BASE_URL
    : DEVELOPMENT_SERVER_BASE_URL;
}

function createApiUrl(path: string): string {
  return new URL(path, getServerBaseUrl()).href;
}

async function publicRequest(path: string, options: RequestInit): JsonPromise {
  const [result, err] = await handlePromise(fetch(createApiUrl(path), options));

  if (err) {
    return [undefined, err];
  }

  const response = result as Response;
  const respData = await response.json();

  return [respData, undefined];
}

export async function publicGet(path: string): JsonPromise {
  return await publicRequest(path, { method: "GET" });
}

export async function publicPost(path: string, body: BodyInit): JsonPromise {
  return await publicRequest(path, { method: "POST", body });
}

export async function publicPut(path: string, body: BodyInit): JsonPromise {
  return await publicRequest(path, { method: "PUT", body });
}

export async function publicDelete(path: string): JsonPromise {
  return await publicRequest(path, { method: "DELETE" });
}

async function protectedRequest(
  path: string,
  token: string,
  options: RequestInit
): JsonPromise {
  const protectedOptions = options;
  if (!protectedOptions.headers) {
    protectedOptions.headers = {};
  }
  protectedOptions.headers["Authorization"] = `Bearer ${token}`;

  return await publicRequest(path, protectedOptions);
}

export async function protectedGet(path: string, token: string): JsonPromise {
  return await protectedRequest(path, token, { method: "GET" });
}

export async function protectedPost(
  path: string,
  token: string,
  body: BodyInit
): JsonPromise {
  return await protectedRequest(path, token, { method: "POST", body });
}

export async function protectedPut(
  path: string,
  token: string,
  body: BodyInit
): JsonPromise {
  return await protectedRequest(path, token, { method: "PUT", body });
}

export async function protectedDelete(
  path: string,
  token: string
): JsonPromise {
  return await protectedRequest(path, token, { method: "DELETE" });
}
