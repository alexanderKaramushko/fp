import { compose } from 'rambda';

class IO {

  public unsafePerformIO: () => unknown;

  constructor(fn: () => unknown) {
    this.unsafePerformIO = fn;
  }

  static of(value: () => unknown | unknown): IO {
    return new IO(() => value);
  }

  map(fn: (arg: unknown) => unknown): IO {
    return new IO(compose(fn, this.unsafePerformIO));
  }

  inspect(): unknown {
    return `IO(${this.unsafePerformIO()})`;
  }

}

export default IO;
