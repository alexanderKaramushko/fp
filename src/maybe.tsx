/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Maybe абстрагирует вызов функции, возвращая либо Just, либо Nothing
 */

import { lensProp, toUpper, view } from 'rambda';
import React, { FC, ReactElement, ReactNode } from 'react';
import { render } from 'react-dom';

import Maybe, { maybe } from './functors/Maybe';

const Profile: FC = ({ person }: any): ReactElement => {
  const getName = view(lensProp('name'));
  const maybeFunctor = Maybe.of(person).map(getName);

  return (
    // Похоже на оператор опциональной последовательности ? и на оператор объединения ??
    // person?.name.toUpperCase() ?? 'No name'
    <>
      {maybe('Nothing to show', toUpper, maybeFunctor) as ReactNode}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
render(<Profile person={{ name: 'Oleg' }} />, document.getElementById('app'));
