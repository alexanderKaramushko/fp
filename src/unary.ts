/**
 * Множество к одному
 */

import { unary } from './utils';

const stringNumbers = ['1', '2', '3'];
const intNumbers = stringNumbers.map(unary(parseInt));

// eslint-disable-next-line no-console
intNumbers.forEach(unary(console.log));
