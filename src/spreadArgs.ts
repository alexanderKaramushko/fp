/**
 * Развертка аргументов
 */

import { spreadArgs, unary } from './utils';

const stringNumbers = ['1', '2', '3'];
const intNumbers = stringNumbers.map(unary(parseInt));

// eslint-disable-next-line no-console
spreadArgs(console.log)(intNumbers);
