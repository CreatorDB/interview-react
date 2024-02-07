import type { Item } from './types';

const data: Item[] = [
  {
    id: 1,
    name: 'John',
    age: 23,
  },
  {
    id: 2,
    name: 'Jane',
    age: 25,
  },
  {
    id: 3,
    name: 'Joe',
    age: 30,
  },
  {
    id: 4,
    name: 'Jill',
    age: 28,
  },
];

export const getItems = async ({ isReturnError }: { isReturnError: boolean } = { isReturnError: false }) => {
  return new Promise<Item[]>((resolve, reject) => {
    window.setTimeout(() => {
      if (isReturnError) {
        reject(new Error('Something went wrong'));
      } else {
        resolve(data);
      }
    }, 1000);
  });
};
