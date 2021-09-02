import { add, append, head, join, prepend, prop, split } from 'rambda';
import Either, { either, Left, left } from '../functors/Either';
import { map } from '../functors/helpers';
import Maybe, { maybe } from '../functors/Maybe';
import { compose, identity } from '../utils';

const user = {
  active: true,
  id: 2,
  name: 'Albert',
};

// const incrF = map(add(1), Maybe.of(1));

// // eslint-disable-next-line no-console
// console.log(maybe('', console.log, incrF));

// =========================================================

// const initial = compose(head, split(''));

// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// const safeProp = (propName: string) => compose(maybe('No such prop', prop(propName)), Maybe.of);

// const getNameInitial = compose(initial, safeProp('name'));

// // eslint-disable-next-line no-console
// console.log(getNameInitial(user));

// =========================================================

// // showWelcome :: User -> String
// const showWelcome = compose(join(''), prepend('Welcome '), prop('name'));

// // checkActive :: User -> Either String User
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const checkActive = function checkActive(userArg: any): Either | Left {
//   return userArg.active
//     ? Either.of(userArg)
//     : left('Your account is not active');
// };

// const eitherWelcome = compose(either(identity, showWelcome), checkActive);

// // eslint-disable-next-line no-console
// console.log(eitherWelcome(user));
