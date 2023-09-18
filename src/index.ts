//#region 关键字
// import { OtherHero } from './no-any/middle/keyword';
// const otherHero = new OtherHero('Fiona Xu');
// otherHero.helloWorld(otherHero.name);
// otherHero.helloHero('Mountain Zeng');
// otherHero.helloHero({ name: 'Mountain Zeng' });
//#endregion

//#region 泛型函数
import { SchemaModel } from './no-any/helper';
import { getSelectItems } from './no-any/middle/generic';
const selectItems = await getSelectItems(SchemaModel.basicinfo, ['line_id', 'model_id']);
console.log(selectItems.line_id);
console.log(selectItems.model_id);
//#endregion
