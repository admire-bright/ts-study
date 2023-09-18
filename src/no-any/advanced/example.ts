import {AggregationBucketBase} from '../helper';

// 大小写转换
export type LogType = 'FAIL' | 'RETEST' | 'RETRY' | 'PASS';
export type LowerLogType = Lowercase<LogType>;

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
