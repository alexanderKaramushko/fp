// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { compose } from 'rambda';
import { map } from '../functors/helpers';
import { safeProp } from '../utils';
import { join } from './helpers';

const user = {
  addresses: [
    {
      street: {
        name: 'Walnut St',
        number: 22,
      },
    },
  ],
  id: 1,
  name: 'Albert',
};

// safeHead :: [a] -> Maybe a
const safeHead = safeProp(0);

// getStreetName :: User -> Maybe String
const getStreetName = compose(join, map(safeHead), safeProp('addresses'));

// eslint-disable-next-line no-console
console.log(getStreetName(user));
