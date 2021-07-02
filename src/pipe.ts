/**
 * Композиция (left-to-right)
 */

import { identity, pipe } from './utils';

const data = ['james', '', 'jack', 'max', '', 'alex'];

function uppercaseFirstLetter(str: string): string {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function uppercaseNames(names: string[]): string[] {
  return names.map(uppercaseFirstLetter);
}

function filterEmptyNames(names: string[]): string[] {
  return names.filter(identity);
}

const processNames = pipe(filterEmptyNames, uppercaseNames);

// eslint-disable-next-line no-console
console.log(processNames(data));
