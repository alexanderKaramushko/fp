/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Either абстрагирует вызов функции, возвращая либо результат, либо контекст
 */

import { toUpper } from 'rambda';
import React, { FC, ReactElement, ReactNode } from 'react';
import { render } from 'react-dom';

import Either, { either, Left, left, Right } from './functors/Either';

const Profile: FC = ({ person }: any): ReactElement => {
  function getPersonName(p: any): Right | Left {
    return p.role === 'Admin'
      ? Either.of('Welcome!')
      : left('Please, log in');
  }

  const exclaim = (str: string): string => `${str}!`;

  return (
    <>
      {either(exclaim, toUpper, getPersonName(person)) as ReactNode}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
render(<Profile person={{ role: 'Admin' }} />, document.getElementById('app'));
