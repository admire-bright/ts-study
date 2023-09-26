// 数组map
// [1, 2, 3].map(function callback(currentValue, index, array) {
//   //处理当前元素
//   return currentValue;
// });

import {sleep} from './helper';

// 异步回调
type CallBack<T = void> = (error: null | Error, str: string) => T;
export function callbackA(cb: CallBack) {
  sleep(1000).then(() => cb(null, 'A'));
}
export function callbackB(cb: CallBack) {
  sleep(1000).then(() => cb(null, 'B'));
}
export function callbackC(cb: CallBack) {
  sleep(1000).then(() => cb(null, 'C'));
}
// callback
export function callbackTest() {
  callbackA((_e1, a) => {
    callbackB((_e2, b) => {
      callbackC((_e3, c) => console.log(a + b + c));
    });
  });
}
