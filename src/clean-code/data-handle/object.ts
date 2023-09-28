import {Hero} from '../../no-any/middle/keyword';
import _ from 'lodash';

const obj: Hero = {
  name: 'Admire Bright',
  age: 18,
  boy: true,
  money: 0,
  hobby: 'eat',
  feature: Symbol('human'),
  skills: [],
  body: {height: 180, weight: 70},
  heroJob: {id: '1', job: 'coder'},
  helloWorld(str?: string) {
    console.log(str ? `hello ${str}` : 'hello world');
  },
  getHeroJobId(defaultId?: string) {
    return this.heroJob?.id ?? defaultId ?? '';
  },
};
// 属性更改
obj.money = 1000000000;
Reflect.set(obj, 'money', 1000000000);

// 属性删除
delete obj.heroJob;
Reflect.deleteProperty(obj, 'heroJob');

// 属性获取
const heroName = obj.name;
Reflect.get(obj, heroName);

//对象拷贝
const newObj1 = {...obj}; //浅拷贝,推荐，无嵌套对象时，浅拷贝===深拷贝
// console.log('...', newObj1);

const newObj2 = Object.assign({}, obj); //浅拷贝
// console.log('assign', newObj2);

const newObj3 = JSON.parse(JSON.stringify(obj)); //只拷贝属性，方法丢失
// console.log('parse_stringify', newObj3);

const newObj4 = _.cloneDeep(obj); // 深拷贝，推荐
// console.log('cloneDeep', newObj4);

// 解构赋值
const {name, age, money, body, feature, ...other} = obj;

// 属性挑选
const HeroBasic = _.pick(obj, ['name', 'age', 'money', 'body', 'feature']);

// 属性剔除
const HeroOther = _.omit(obj, ['name', 'age', 'money', 'body', 'feature']);

// 循环
let objKey: keyof Hero;
for (objKey in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, objKey)) {
    console.log(obj[objKey]);
  }
}

_.forEach(obj, (value, _key) => console.log(value));

const keys = _.map(obj, (_value, key) => key);

const findName = _.find(obj, (_value, key) => key === 'name');
