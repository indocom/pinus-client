import firebase from "firebase/app";

export type FirebaseError = firebase.FirebaseError;

type FirebasePromise<T> = Promise<[T?, FirebaseError?]>;

export async function handleFirebasePromise<T>(
  promise: Promise<T>
): FirebasePromise<T> {
  try {
    const result = await promise;
    return [result, undefined];
  } catch (err) {
    return [undefined, err];
  }
}
