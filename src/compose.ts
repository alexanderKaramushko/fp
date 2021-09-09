/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Композиция (right-to-left)
 */

import { compose, curry, equals } from 'rambda';
import { identity } from './utils';

const data = ['james', '', 'jack', 'max', '', 'alex'];

// Убираем явное оперирование данными (pointfree)
const filter = curry((fn: Function, array: any) => array.filter(fn));
const map = curry((fn: Function, array: any) => array.map(fn));

function uppercaseFirstLetter(str: string): string {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function addExclamation(str: string): string {
  return `${str}!`;
}

// function uppercaseNames(names: string[]): string[] {
//   return names.map(uppercaseFirstLetter);
// }

// function filterEmptyNames(names: string[]): string[] {
//   return names.filter(identity);
// }

// Коммутативность
// const processNames1 = compose(map(uppercaseFirstLetter), map(addExclamation), filter(identity));
// const processNames2 = compose(map(addExclamation), filter(identity), map(uppercaseFirstLetter));
// // // eslint-disable-next-line no-console
// console.log(equals(processNames1(data), processNames2(data)));

// Ассоциативность
// const filterOutAndExclaim = compose(map(addExclamation), filter(identity));
// const processNames1 = compose(map(uppercaseFirstLetter), filterOutAndExclaim);
// const processNames2 = compose(filterOutAndExclaim, map(uppercaseFirstLetter));
// // eslint-disable-next-line no-console
// console.log(equals(processNames1(data), processNames2(data)));

// Дистрибутивность
// const exclaimAndUppercase = compose(uppercaseFirstLetter, addExclamation);
// const processNames1 = compose(map(exclaimAndUppercase), filter(identity));
// // eslint-disable-next-line no-console
// console.log(equals(processNames1(data), processNames2(data)));

// Тоджественность
// const exclaimAndUppercase = compose(uppercaseFirstLetter, addExclamation);
// const processNames1 = compose(identity, map(exclaimAndUppercase));
// const processNames2 = compose(map(exclaimAndUppercase), identity);

// // eslint-disable-next-line no-console
// console.log(equals(processNames1(data), processNames2(data)));
// // eslint-disable-next-line no-console
// console.log(equals(processNames1(data), map(exclaimAndUppercase)(data)));
// // eslint-disable-next-line no-console
// console.log(equals(processNames2(data), map(exclaimAndUppercase)(data)));
