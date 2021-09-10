// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { compose, last, split } from 'rambda';
import { map } from '../functors/helpers';
import IO from '../functors/IO';
import { chain, join } from '../monads/helpers';
import { safeProp } from '../utils';

const user = {
  address: {
    street: {
      name: 'Walnut St',
      number: 22,
    },
  },
  id: 1,
  name: 'Albert',
};

// Maybe(Maybe(Maybe('Walnut St')))
// const getStreetName1 = compose(map(map(safeProp('name'))), map(safeProp('street')), safeProp('address'));
// // getStreetName :: User -> Maybe String
const getStreetNameJoin = compose(map(safeProp('name')), join, map(safeProp('street')), safeProp('address'));
// const getStreetNameMonadic = compose(chain(safeProp('name')), chain(safeProp('street')), safeProp('address'));

// // eslint-disable-next-line no-console
// console.log(getStreetName(user));
// console.log(getStreetNameJoin(user));
// console.log(getStreetNameMonadic(user));
