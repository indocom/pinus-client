export type BasePromise<T> = Promise<[T?, Error?]>;

export async function handlePromise<T>(promise: Promise<T>): BasePromise<T> {
  try {
    const result = await promise;
    return [result, undefined];
  } catch (err) {
    return [undefined, err];
  }
}
