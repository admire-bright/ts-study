import { Hero1, Hero2, Hero3, Hero4, OneHero } from './keyword';
// |
export type StrNum = string | number;
// &
export type Hero = Hero1 & Hero2 & Hero3 & Hero4;

export const testResult = {
  evt_ns: 'wzs.lava.m5',
  evt_pubBy: 'AIDD.IIT',
  evt_dt: 1693351389917,
  evt_type: 'HISTORY_ANALOG',
  site: 'WZS',
  plant: 'F136',
  machine_type: 'ICT',
  sn: '655008010053335003FCJ0A1',
  file_name: '655008010053335003FCJ0A1_Fail_20230830072250.txt',
  log_time: 1693351370000,
  log_type: 'FAIL',
  program_id: '7841CR_0053_A1_2134_REV1',
  model_id: '7841CR',
  station_id: 'TA',
  pcb_no: '14025-9',
  line_id: 'D22',
  operator: 'Z21081697',
  fixture_id: '2134',
  machine_id: 'D22_TA_MY49430322',
  evt_data: {
    component: '1%u6%cr3',
    measured: '--',
    nominal: '--',
    high_limit: '747.00m',
    low_limit: '228.00m',
    over_rate: '--',
  },
};
// typeof
export type TestResult = typeof testResult;
// keyof
export type TestResultKey = keyof TestResult;
// in
export type NewTestResult = {
  [k in TestResultKey]: TestResult[k];
};

// extends条件判断
export type PickHero = Pick<Hero, 'name' | 'age'>;
// 前面的是否可以赋给后面的，前面的范围是否更小（索引越多范围更小）
export type ExtendsTest1 = Hero extends PickHero ? 'Yes' : 'No';
export type ExtendsTest2 = PickHero extends Hero ? 'Yes' : 'No';
function pickHero(req: PickHero) {
  console.log(req);
}
const hero = new OneHero('Mountain Zeng');
pickHero(hero);
