import { compose } from 'rambda';

class IO {

  private $value: () => unknown;

  constructor(fn: () => unknown) {
    this.$value = fn;
  }

  static of(value: () => unknown): IO {
    return new IO(() => value);
  }

  map(fn: (arg: unknown) => unknown): IO {
    return new IO(compose(fn, this.$value));
  }

  inspect(): unknown {
    return `IO(${this.$value()})`;
  }

}

export default IO;
