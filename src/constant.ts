/**
 * Неизменяемые возвращаемые данные
 */

import { constant } from './utils';

// @Prop({ type: Array, default: () => [] }) readonly items!: SelectItem[] | AutocompleteItem[];
// @Prop({ type: Array, default: constant([]) }) readonly items!: SelectItem[] | AutocompleteItem[];

const defaultProps = {
  data: constant([]),
};

// eslint-disable-next-line no-console
console.log(defaultProps.data());
