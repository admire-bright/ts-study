import {promisify} from 'util';
import {callbackA, callbackB, callbackC} from './callback';

export const [promiseA, promiseB, promiseC] = [promisify(callbackA), promisify(callbackB), promisify(callbackC)];

// resolve
// const res = Promise.resolve('res');
// reject
// const rej = Promise.reject('rej');
//Promise...then...catch
export function promiseAB(str: 'A' | 'B') {
  return str === 'A' ? Promise.resolve('A') : Promise.reject('B');
}
export function promiseTest() {
  promiseAB('A')
    .then(res => console.log('then', res))
    .catch(console.error);
  promiseAB('B')
    .then(console.log)
    .catch(err => console.error('catch', err));
}

// Promise.all
export function promiseABC() {
  console.time('promiseABC');
  let s = '';
  promiseA()
    .then(a => {
      s += a;
      return promiseB();
    })
    .then(b => {
      s += b;
      return promiseC();
    })
    .then(c => {
      s += c;
      console.log('s1', s);
      console.timeEnd('promiseABC');
    })
    .catch(console.error);
}
export function promiseAllABC() {
  console.time('promiseAllABC');
  Promise.all([promiseA(), promiseB(), promiseC()])
    .then(([a, b, c]) => {
      console.log('s2', a + b + c);
      console.timeEnd('promiseAllABC');
    })
    .catch(console.error);
}
