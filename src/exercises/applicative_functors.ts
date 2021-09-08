import { curry } from 'rambda';
import Maybe from '../functors/Maybe';

const add = curry((a, b) => a + b);
const safeAddApplicative = Maybe.of(add(5)).ap(Maybe.of(5));

// const liftA2 = curry((g, f1, f2) => f1.map(g).ap(f2));

// console.log(liftA2(add, Maybe.of(5), Maybe(5)));
