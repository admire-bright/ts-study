declare type StringObject = Record<string, string>;
declare type StrArrObject = Record<string, string[]>;
declare type NumArrObject = Record<string, number[]>;
declare type BaseObject = Record<string, string | string[] | number[] | number>;
declare type AnyObject = Record<string, any>;
declare type CustomerObject<T> = Record<string, T>;
