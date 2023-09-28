import _ from 'lodash';

process.on('unhandledRejection', console.log);
//#region no-any 关键字
// import { OtherHero } from './no-any/middle/keyword';
// const otherHero = new OtherHero('Fiona Xu');
// otherHero.helloWorld(otherHero.name);
// otherHero.helloHero('Admire Bright');
// otherHero.helloHero({ name: 'Admire Bright' });
//#endregion

//#region no-any 泛型函数
// import {SchemaModel} from './no-any/helper';
// import {getSelectItems} from './no-any/middle/generic';
// const selectItems = await getSelectItems(SchemaModel.basicinfo, ['line_id', 'model_id']);
// console.log(selectItems.line_id);
// console.log(selectItems.model_id);
//#endregion

//#region clean-code Promise
// import {promiseTest} from './clean-code/promise';
// promiseTest();
//#endregion

//#region clean-code Promise.all
// import {promiseABC, promiseAllABC} from './clean-code/avoid-callback/promise';
// promiseABC();
// promiseAllABC();
//#endregion

//#region clean-code async+await
// import {asyncABC, asyncAllABC} from './clean-code/avoid-callback/async-await';
// asyncABC();
// asyncAllABC();
//#endregion
