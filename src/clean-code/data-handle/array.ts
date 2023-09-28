import _ from 'lodash';
import {Hero} from '../../no-any/middle/keyword';

const heroes: Partial<Hero>[] = [
  {name: 'Admire Bright1', age: 18, boy: true, money: 0, hobby: 'eat'},
  {name: 'Admire Bright2', age: 18, boy: true, money: 0, hobby: 'eat'},
  {name: 'Admire Bright3', age: 18, boy: true, money: 0, hobby: 'eat'},
  {name: 'Admire Bright4', age: 18, boy: true, money: 0, hobby: 'eat'},
  {name: 'Admire Bright5', age: 18, boy: false, money: 1000000, hobby: 'code'},
  {name: 'Admire Bright6', age: 18, boy: false, money: 1000000, hobby: 'code'},
  {name: 'Admire Bright7', age: 18, boy: false, money: 1000000, hobby: 'code'},
  {name: 'Admire Bright8', age: 18, boy: false, money: 1000000, hobby: 'code'},
];
// 循环,可读性优先级：map & forEach > for & for...of
const heroNames = heroes.map(hero => hero.name);
const findHero = heroes.find(hero => hero.name === 'Admire Bright3');

const totalMoney = heroes
  .filter(hero => hero.money)
  .reverse()
  .flat()
  .map(hero => hero.money!)
  .reduce((total, money) => total + money, 0);

// 解构
const [, , thridHero, , fiveHero] = heroes;

// 比较
const updateHeroes: Pick<Hero, 'name' | 'age' | 'boy' | 'money' | 'hobby'>[] = [
  {name: 'Admire Bright1', age: 18, boy: true, money: 0, hobby: 'eat'},
  {name: 'Admire Bright2', age: 18, boy: true, money: 0, hobby: 'eat'},
  {name: 'Admire Bright3', age: 18, boy: true, money: 0, hobby: 'eat'},
  {name: 'Admire Bright4', age: 18, boy: true, money: 0, hobby: 'eat'},
  {name: 'Admire Bright5', age: 18, boy: true, money: 0, hobby: 'eat'},
  {name: 'Admire Bright7', age: 18, boy: false, money: 1000000, hobby: 'code'},
  {name: 'Admire Bright8', age: 18, boy: false, money: 1000000, hobby: 'code'},
  {name: 'Admire Bright9', age: 18, boy: false, money: 1000000, hobby: 'code'},
];
const createHeros = _.differenceBy(updateHeroes, heroes, 'name');
const deleteHeros = _.differenceBy(heroes, updateHeroes, 'name');

// 去重
// 元素为值类型
const arr = [1, 2, 2, 3, 2];
const setArr = [...new Set(arr)];
const uniqueArr = _.uniq(arr);
// 元素为对象
const uniqueHeros = _.uniqBy(heroes, 'name');

// 可迭代对象转换为数组
const str = 'hello';
const iterableArr = [...str]; // 代替string.split

const iterableObj1 = new Map([
  ['a', 1],
  ['b', 2],
]);
const iterableArr1 = [...iterableObj1];

const iterableObj2 = new Set([1, 2]);
const iterableArr2 = [...iterableObj2];

function arrTest(...args: number[]) {
  console.log(args);
}
arrTest(1, 2, 3, 4);
