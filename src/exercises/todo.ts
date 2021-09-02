// import { curry, identity } from 'rambda';
// import Either, { either, Left, left } from './functors/Either';
// import { compose } from './utils';

// function isElement(element: HTMLElement | null): Either | Left {
//   return element
//     ? Either.of(element)
//     : left('No element was found');
// }

// // eslint-disable-next-line arrow-body-style
// const addOrremoveClass = curry((className: string, { classList }: HTMLElement) => {
//   return classList.contains(className)
//     ? classList.remove(className)
//     : classList.add(className);
// });

// const toggleClass = compose(
//   either(identity, addOrremoveClass('active')),
//   isElement,
//   document.querySelector.bind(document),
// );

// document.querySelector('button')?.addEventListener('click', () => toggleClass('.target'));
