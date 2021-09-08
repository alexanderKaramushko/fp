import { curry as curryR } from 'rambda';
import Maybe from './functors/Maybe';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function unary<T>(fn: (...args: any[]) => T): (firstArg: unknown) => T {
  return function makeUnary(firstArg: unknown): T {
    return fn(firstArg);
  };
}

export function identity<T>(firstArg: T): T {
  return firstArg;
}

export function constant<T>(arg: T): () => T {
  return function makeConstant(): T {
    return arg;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function spreadArgs<T>(fn: (...args: any[]) => T): (args: unknown[]) => T {
  return function makeSpread(args: unknown[]): T {
    return fn(...args);
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function partial<T>(fn: (...args: any[]) => T, ...fixedArgs: unknown[]): (...laterArgs: unknown[]) => T {
  return function makePartial(...laterArgs: unknown[]): T {
    return fn(...fixedArgs, ...laterArgs);
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function partialRight<T>(fn: (...args: any[]) => T, ...fixedArgs: unknown[]): (...laterArgs: unknown[]) => T {
  return function makePartial(...laterArgs: unknown[]): T {
    return fn(...laterArgs, ...fixedArgs);
  };
}

export function curry<T>(fn: Function, arity: number): Function {
  const args: unknown[] = [];

  return function makeCurry(arg: unknown): T | Function {
    const fnArity = arity || fn.length;

    args.push(arg);

    if (args.length < fnArity) {
      return makeCurry;
    }
    return fn(...args);
  };
}

export function compose<T>(...fns: Function[]): (arg: unknown) => T {
  return function makeComposition(result: unknown): T {
    const copiedFns = fns.slice();

    while (copiedFns.length > 0) {
      const fn = copiedFns.pop();

      if (fn) {
        // eslint-disable-next-line no-param-reassign
        result = fn(result);
      }
    }

    return result as T;
  };
}

export function pipe<T>(...fns: Function[]): (arg: unknown) => T {
  return compose(...fns.reverse());
}

// todo some issues with my curring
// safeProp :: Key -> {Key: a} -> Maybe a
export const safeProp = curryR((x, obj) => Maybe.of(obj[x]));
