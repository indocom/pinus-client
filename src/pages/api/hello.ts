// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req: Record<string, unknown>, res): void => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
