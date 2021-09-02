class Container {

  private $value: unknown;

  constructor(value: unknown) {
    this.$value = value;
  }

  static of(value: unknown): Container {
    return new Container(value);
  }

  // (a -> b) -> Container a -> Container b
  map(fn: Function): Container {
    return Container.of(fn(this.$value));
  }

  inspect(): unknown {
    return this.$value;
  }

}

export default Container;
