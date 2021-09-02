import { curry } from 'rambda';

/**
 * Маппинг любого функтора
 */
export const map = curry((f, anyFunctor) => anyFunctor.map(f));
