export type MaybePromise<T> = Promise<T> | T;

export async function resolveParams<T>(value: MaybePromise<T>) {
  return await value;
}
