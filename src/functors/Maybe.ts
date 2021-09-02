import { curry } from 'rambda';

class Maybe {

  private $value: unknown;

  constructor(value: unknown) {
    this.$value = value;
  }

  static of(value: unknown): Maybe {
    return new Maybe(value);
  }

  get isNothing(): boolean {
    return this.$value === null || this.$value === undefined;
  }

  // (a -> b) -> Maybe a -> Maybe b
  map(fn: Function): Maybe {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  inspect(): unknown {
    return this.isNothing ? 'Nothing' : `Just(${this.$value})`;
  }

}

/**
 * Возвращает значение из контекста
 */
export const maybe = curry((error, fn, Functor) => {
  if (Functor.isNothing) {
    return error;
  }

  return fn(Functor.$value);
});

export default Maybe;
