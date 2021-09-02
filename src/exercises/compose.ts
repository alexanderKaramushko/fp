/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @ts-nocheck

// eslint-disable-next-line no-unused-vars
import { reduce, map, curry, last, lensProp, view, compose, add } from 'rambda';

// eslint-disable-next-line no-unused-vars
const mockData = [
  {
    dollar_value: 1850000,
    horsepower: 750,
    in_stock: true,
    name: 'Aston Martin One-77',
  },
  {
    dollar_value: 200000,
    horsepower: 110,
    in_stock: true,
    name: 'Lada Calina',
  },
];

// =========================================================

// const extractInStock = curry(view)(lensProp('in_stock'));

// const isLastInStock = compose(extractInStock('in_stock'), last);

// // eslint-disable-next-line no-console
// console.log(isLastInStock(mockData));

// =========================================================

// const getAverage = (xs) => reduce(add, 0, xs) / xs.length;

// const extractDollarValue = view(lensProp('dollar_value'));

// const getDollarValue = map(extractDollarValue);

// const processAverage = compose(getAverage, getDollarValue)(mockData);

// // eslint-disable-next-line no-console
// console.log(processAverage);

// =========================================================
