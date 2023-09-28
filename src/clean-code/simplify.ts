import {randomUUID} from 'crypto';

type Value = string | number | boolean | undefined | null;
const value1: Value = 1;
const value2: Value = '';
const value3: Value = true;
// not
if (value1 > 0) {
  console.log('value1 is truthy');
}
if (value2 !== '') {
  console.log('value2 is truthy');
}
if (value3 === true) {
  console.log('value3 is truthy');
}
// use
if (value1) {
  console.log('value1 is truthy');
}
// 赋值
interface Human {
  name: string;
  age: number;
  id?: string;
}
const my: Human = {
  name: 'Admire Bright',
  age: 18,
};
//not
let myId4: string;
if (my.id) {
  myId4 = my.id;
} else {
  myId4 = randomUUID();
}
//use
const myId1: string = Reflect.has(my, 'id') ? my.id! : randomUUID();
const myId2: string = my.id || randomUUID(); //||:将值转为boolean,再判断true/false
const myId3: string = my.id ?? randomUUID(); //??:只有null 或者 undefined才会判断为FALSE
