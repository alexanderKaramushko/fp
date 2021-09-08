import { map } from '../functors/helpers';
import { compose } from '../utils';

/**
 * Извлечь значение монада
 */
// join :: Monad m => m (m a) -> m a
export const join = (mma) => mma.join();

/**
 * Маппинг и извлечение значения монада
 */
// chain :: Monad m => (a -> m b) -> m a -> m b
export const chain = (f) => compose(join, map(f));
