/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-classes-per-file */
import { curry } from 'rambda';

class Either {

  protected $value: unknown;

  constructor(value: unknown) {
    this.$value = value;
  }

  static of(value: unknown): Right {
    return new Right(value);
  }

}

export class Left extends Either {

  map(fn: Function): Either {
    return this;
  }

  inspect(): unknown {
    return `Left(${this.$value})`;
  }

}

export class Right extends Either {

  map(fn: Function): Either {
    return Either.of(fn(this.$value));
  }

  inspect(): unknown {
    return `Right(${this.$value})`;
  }

}

export const left = (x: unknown): Left => new Left(x);

export const either = curry((fnLeft, fnRight, Functor) => {
  let result;

  // eslint-disable-next-line default-case
  switch (Functor.constructor) {
    case Right:
      result = fnRight(Functor.$value);
      break;
    case Left:
      result = fnLeft(Functor.$value);
      break;
  }

  return result;
});

export default Either;
