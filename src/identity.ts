/**
 * Один к одному
 */

import { identity, unary } from './utils';

const numbersWithFalsyValues = ['1', '2', null, '3', false];
const intNumbers = numbersWithFalsyValues.filter(identity);

// eslint-disable-next-line no-console
intNumbers.forEach(unary(console.log));
