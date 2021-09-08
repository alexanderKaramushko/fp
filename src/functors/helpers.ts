import { curry } from 'rambda';
import Maybe from './Maybe';

/**
 * Маппинг любого функтора
 */
export const map = curry((f, anyFunctor) => anyFunctor.map(f));
