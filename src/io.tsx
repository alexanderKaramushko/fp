/**
 * IO оборачивает функцию с сайд-эффектами в безопасную обертку
 * позволяя обеспечить ссылочную прозрачность
 */

import IO from './functors/IO';

import { identity } from './utils';

const getInnerWidth = (): number => window.innerWidth;

const io = new IO(getInnerWidth);

// eslint-disable-next-line no-console
console.log(io.map(identity).inspect());
