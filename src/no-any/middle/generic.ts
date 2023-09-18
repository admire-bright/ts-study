import {AggregationTime, Count, SchemaModel, TestingAgg} from '../helper';
import _ from 'lodash';
// 泛型类型
const snCount: Count<'sn'> = {
  sn: {value: 100},
};

// 泛型接口
export interface TestingIndexTrend1<T extends TestingAgg> {
  date_group: {buckets: (AggregationTime & T)[]};
}

// 泛型类
export class TestingIndexTrend2<T extends TestingAgg> {
  date_group?: {buckets: (AggregationTime & T)[]};
}

// 泛型函数
export async function getSelectItems<T extends string>(
  dbName: SchemaModel,
  columns: T[],
  condition?: StringObject,
): Promise<Record<T, string[]>> {
  let queryCondition = '';
  if (condition && Object.keys(condition).length) {
    const queryConditions = _.map(condition, (value, key) => {
      if (value === '') return `(t.${key} = '' or t.${key} is  null)`;
      else if (value === 'non-empty') return `t.${key} <> '' and t.${key} is not null`;
      else if (Array.isArray(value)) return `t.${key} in ('${value.join("','")}')`;
      else return `t.${key} = '${value}'`;
    });
    queryCondition = ` where ${queryConditions.join(' and ')}`;
  }
  const req = columns.map(column => {
    const querySql = `select distinct ${column} from ${dbName} t ${queryCondition}`;
    return Promise.resolve([{[column]: querySql}]);
  });
  const res = <StringObject[][]>await Promise.all(req);
  const selectItems = {} as Record<T, string[]>;
  columns.forEach((column, index) => {
    selectItems[column] = res[index]
      .filter(item => item[column])
      .map(elem => elem[column])
      .sort();
  });
  return selectItems;
}
interface GetSelectItems {
  <T extends string>(dbName: SchemaModel, columns: T[], condition?: StringObject): Promise<Record<T, string[]>>;
}
export const getSelectItems1: GetSelectItems = async <T extends string>(
  dbName: SchemaModel,
  columns: T[],
  condition?: StringObject,
) => {
  return getSelectItems(dbName, columns, condition);
};
