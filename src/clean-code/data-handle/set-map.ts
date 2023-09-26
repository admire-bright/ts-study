// Set,常用于去重
const tempSet = new Set<number>([1]);
tempSet.add(2);
tempSet.add(3);
tempSet.has(1);
const setSize = tempSet.size;
tempSet.forEach(value => console.log(value));
tempSet.clear();

// Map,常用于存储键值对，相对于对象，Map存储是有序的
const tempMap = new Map<string, number>();
tempMap.set('a', 1);
tempMap.set('b', 2);
tempMap.has('a');
tempMap.get('a');
const mapSize = tempMap.size;
tempMap.forEach((value, key) => console.log(value, key));
tempMap.clear();
