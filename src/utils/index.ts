export function isString(s: unknown): boolean {
  return typeof s === "string" || s instanceof String;
}
