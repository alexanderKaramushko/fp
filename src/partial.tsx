/**
 * Частичное применение
 */

import axios from 'axios';
import { partial, unary } from './utils';

const getUsers = partial(axios.get, 'https://jsonplaceholder.typicode.com/users');

getUsers({
  params: {
    id: 1,
  },
// eslint-disable-next-line no-console
}).then(unary(console.log));

getUsers({
  params: {
    id: 2,
  },
// eslint-disable-next-line no-console
}).then(unary(console.log));
