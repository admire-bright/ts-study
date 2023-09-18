export type TestingMachineType = 'MDA' | 'ICT' | 'B-BOX';
export type LogType = 'FAIL' | 'RETEST' | 'RETRY' | 'PASS';
export type IntervalType = 'hour' | 'day' | 'week' | 'month';
export type Count<K extends string> = { [key in K]: { value: number } };
export interface AggregationGroup {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
}
export interface AggregationBucketBase {
  key: string;
  doc_count: number;
}
export interface TestingTestCockpitReq {
  machine_type: TestingMachineType;
  line_id: string[];
  timeRange: [number, number];
  station_id?: string;
}
export interface TestingTestCockpitLineReq {
  machine_type: TestingMachineType;
  line_id: string;
  station_id?: string;
  model_id: string[];
  machine_id?: string[];
  fixture_id?: string[];
  timeRange: [number, number];
}

export interface FixtureAnalysisReq {
  machine_type: TestingMachineType;
  model_id: string;
  fixture_id: string[];
  line_id: string[];
  timeRange: [number, number];
  station_id?: string | string[];
}
export interface TestingTestOverviewReq {
  machine_type: TestingMachineType;
  model_id: string[];
  customer_id: string[];
  line_id: string[];
  timeRange: [number, number];
  station_id?: string | string[];
}
export interface FixtureAnalysisLogType {
  machine_type: TestingMachineType;
  model_id: string;
  station_id: string;
  fixture_id: string;
  line_id: string;
  timeRange: [number, number];
  log_type: LogType;
}
export type TestingReq =
  | TestingTestCockpitReq
  | TestingTestCockpitLineReq
  | FixtureAnalysisReq
  | Omit<TestingTestOverviewReq, 'customer_id'>
  | FixtureAnalysisLogType;
export interface IoAgg {
  input: { value: number };
  output_filter: Count<'output'>;
}
export interface YrAgg {
  fail_filter: Count<'sn'>;
  pass_fail_filter: Count<'sn'>;
}
export interface RetestAgg {
  retest: { doc_count?: number; value?: number };
  retest_input: { doc_count?: number; value?: number };
  sn_count?: { value: number };
  mda_retest?: {
    pass_count: { value: number };
    pass_sn_count: { value: number };
  };
}
export interface RetryAgg {
  retry: { value: number };
  retry_input: { value: number };
}
export interface TopRetryAgg {
  retry_all: Count<'sn_count'>;
  retry_fail: Count<'sn_count'>;
  pass_fail_retest: Count<'sn_count'>;
  retest_fail: Count<'sn_count'>;
}
export type MachineAgg = Count<'machine_id'>;
export type TestingAgg = YrAgg | IoAgg | RetestAgg | RetryAgg | MachineAgg | Count<'output'>;
export interface AggregationTime {
  key: number;
  doc_count: number;
  key_as_string?: string;
}
export enum SchemaModel {
  ucAoiCustomerInfo = 'uc_aoi_customer_info',
  ucAoiLineInfo = 'uc_aoi_line_info',
  ucAoiTargetInfo = 'uc_aoi_target_info',
  ucAoiTargetLineInfo = 'uc_aoi_target_line_info',
  vwUcAoiTargetInfo = 'vw_uc_aoi_target_info',
  vwUcAoiTargetLineInfo = 'vw_uc_aoi_target_line_info',
  settingPreferenceIndividuation = 'setting_preference_individuation',
  settingBackstageSystem = 'setting_backstage_system',
  customerInfo = 'customer_info',
  lineInfo = 'line_info',
  settingNotificationGroup = 'setting_notification_group',
  basicinfo = 'basicinfo',
  mntModelInfo = 'mnt_model_info',
  vwNotificationAoiTodayStatus = 'vw_notification_aoi_today_status',
  ictAlertRateSingleDay = 'ict_alert_rate_single_day',
  plateNumberInfo = 'plate_number_info',
  vwUcTestingPcb = 'vw_uc_testing_pcb',
  lineoutput = 'lineoutput',
}
