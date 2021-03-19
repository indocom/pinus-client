export function isOnProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

export function isString(s: unknown): boolean {
  return typeof s === "string" || s instanceof String;
}
