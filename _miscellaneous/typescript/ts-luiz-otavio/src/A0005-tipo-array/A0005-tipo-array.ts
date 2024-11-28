// Array<T> = T[];

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

const concatenaStrings = (...args: string[]): string =>
  args.reduce((acc, valor) => acc + valor, '');

const result = multiplicaArgs(1, 2, 3, 4, 5, 6); //?
console.log(result);

const result2 = concatenaStrings('a', 'b', 'c', 'd', 'e', 'f'); //?
console.log(result2);
