import {IntervalType} from '../helper';
import {Hero} from '../middle/keyword';

// Partial;
export type PartialHero = Partial<Hero>;

// Required;
export type RequiredHero = Required<Hero>;

// Readonly;
export type ReadonlyHero = Readonly<Hero>;

// Pick;
export type PickHero = Pick<Hero, 'name' | 'age' | 'body'>;

// Omit;
export type OmitHero = Omit<Hero, 'name' | 'age' | 'body'>;

// Exclude;
export type ExcludeHero1 = Exclude<Hero, PickHero>; // Exclude<PickHero|OmitHero, PickHero>
export type ExcludeHero2 = Exclude<PickHero, Hero>;

export type ExcludeIntervalType = Exclude<IntervalType, 'hour'>;

// Extract;
export type ExtractHero1 = Extract<Hero, PickHero>;
export type ExtractHero2 = Extract<PickHero, Hero>;

export type ExtractIntervalType = Extract<IntervalType, 'hour'>;

// Record;
export type RecordHero = Record<'name' | 'id', string>;

// NonNullable
type Nullable = 'A' | 'B' | null | undefined;
export type NonNullableHero = NonNullable<Nullable>;
