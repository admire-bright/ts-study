//#region 关键字
// import { OtherHero } from './no-any/middle/keyword';
// const otherHero = new OtherHero('Fiona Xu');
// otherHero.helloWorld(otherHero.name);
// otherHero.helloHero('Mountain Zeng');
// otherHero.helloHero({ name: 'Mountain Zeng' });
//#endregion

//#region 泛型函数
// import { SchemaModel, TestingTestCockpitReq } from './no-any/helper';
// import { GenericEx } from './no-any/middle/generic';
// const req: TestingTestCockpitReq = {
//   machine_type: 'ICT',
//   line_id: ['D5'],
//   timeRange: [0, 1],
// };
// const genericEx = new GenericEx();
// const dateAgg = genericEx.dateHistogramAgg<TestingTestCockpitReq>(req, 'hour');
// console.log(JSON.stringify(dateAgg));
// const selectItems = await genericEx.getSelectItems(SchemaModel.basicinfo, ['line_id', 'model_id']);
// console.log(selectItems.line_id);
// console.log(selectItems.model_id);
//#endregion
