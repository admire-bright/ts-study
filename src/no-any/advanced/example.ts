import {AggregationBucketBase} from '../helper';
import {Hero} from '../middle/keyword';

// 大小写转换
export type LogType = 'FAIL' | 'RETEST' | 'RETRY' | 'PASS';
export type LowerLogType = Lowercase<LogType>;
export type CapitalizeType = Capitalize<LowerLogType>;
const logtype: CapitalizeType = 'Fail';

// 模板字符串
export type LogTemplate<T extends string> = `${LogType}_${T}`;
export const logType: LogTemplate<'A'> = 'FAIL_A';

// ES 连续聚合
export type GroupList<K extends string> = {
  [key in K]?: AggregationBucketBase & GroupList<K>;
};
export const groupList: GroupList<LowerLogType> = {
  fail: {
    key: 'fail',
    doc_count: 0,
    pass: {
      key: 'pass',
      doc_count: 0,
      retry: {
        key: 'retry',
        doc_count: 0,
      },
    },
  },
};

// 链式结构-链表
export interface ListNode<T> {
  value: T;
  next: ListNode<T> | null;
}

// 组合使用
type NewHero<T> = {
  [prop in keyof T as `new${Capitalize<string & prop>}`]-?: T[prop];
};
let newHero: NewHero<Hero> = {
  newHeroJob: {id: '', job: ''},
  newName: '',
  newAge: 0,
  newBoy: false,
  newMoney: null,
  newFeature: Symbol('human'),
  newSkills: [],
  newHobby: 'eat',
  newBody: {height: 180, weight: 70},
  newHelloWorld: function (str?: string | undefined): void {
    throw new Error('Function not implemented.');
  },
  newSetHeroJob: function (): void {
    throw new Error('Function not implemented.');
  },
  newGetHeroJobId: function (defaultId?: string | undefined): string {
    throw new Error('Function not implemented.');
  },
};
