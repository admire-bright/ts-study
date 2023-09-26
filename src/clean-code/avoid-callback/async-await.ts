import {promiseA, promiseB, promiseC} from './promise';

// async+await
export async function asyncABC() {
  console.time('asyncABC');
  const a = await promiseA();
  const b = await promiseB();
  const c = await promiseC();
  console.log('async1', a + b + c);
  console.timeEnd('asyncABC');
}
export async function asyncAllABC() {
  console.time('asyncAllABC');
  const [a, b, c] = await Promise.all([promiseA(), promiseB(), promiseC()]);
  console.log('async2', a + b + c);
  console.timeEnd('asyncAllABC');
}
