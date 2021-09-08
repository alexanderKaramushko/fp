// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { compose, last, split } from 'rambda';
import { map } from '../functors/helpers';
import IO from '../functors/IO';
import { chain } from '../monads/helpers';
import { safeProp } from '../utils';

// const user = {
//   address: {
//     street: {
//       name: 'Walnut St',
//       number: 22,
//     },
//   },
//   id: 1,
//   name: 'Albert',
// };

// // getStreetName :: User -> Maybe String
// const getStreetName = compose(chain(safeProp('name')), chain(safeProp('street')), safeProp('address'));

// // eslint-disable-next-line no-console
// console.log(getStreetName(user));
