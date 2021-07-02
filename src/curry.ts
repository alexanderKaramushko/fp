/**
 * Каррирование
 */

import { curry } from './utils';

function sum(...nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}

const partialSum1 = curry(sum, 5)(1)(2);
const partialSum2 = partialSum1(3)(4);

// eslint-disable-next-line no-console
console.log(partialSum2(5));
