import {HeroBody, HeroHobby, HeroJob} from '../primary/assertion';

export interface Hero1 {
  name: string;
  age: number;
  boy: boolean;
}
export interface Hero1 {
  money: number | null;
}
export interface Hero2 {
  feature: symbol;
  skills: string[];
}
export type Hero3 = {
  hobby: HeroHobby;
  body: HeroBody;
};
export interface Hero4 {
  helloWorld(str?: string): void;
  setHeroJob?: () => void;
  getHeroJobId: (defaultId?: string) => string;
}
//TS可以同时继承多个接口或者类型，JS不可以同时继承多个类（但是可以连续继承）
export interface Hero extends Hero1, Hero2, Hero3, Hero4 {
  heroJob?: HeroJob;
}

export class OneHero implements Hero {
  name: string = 'Admire Bright';
  age: number = 18;
  boy: boolean = true;
  money: null = null;
  feature: symbol = Symbol('human');
  hobby = <HeroHobby>'eat';

  body = {height: 180, weight: 70} as HeroBody;
  skills: string[] = ['write bug', 'read a novel', 'play games'];
  heroJob?: HeroJob = {id: '', job: ''};
  constructor(_name: string) {
    this.name = _name;
  }
  helloWorld(str?: string) {
    console.log(str ? `hello ${str}` : 'hello world');
  }

  setHeroJob() {
    this.heroJob!.id = '123';
    this.heroJob!.job = 'coder';
  }
  getHeroJobId(defaultId?: string) {
    return this.heroJob?.id ?? defaultId ?? '';
  }
}
export class OtherHero extends OneHero {
  constructor(_name: string) {
    super(_name);
  }
  // 重写
  override setHeroJob(): void {
    this.heroJob!.id = '456';
    this.heroJob!.job = 'coder';
  }
  // 重载-参考Date
  helloHero(name: string): void;
  helloHero(obj: {name: string}): void;
  helloHero(params: string | {name: string}) {
    console.log('overload', `hello ${typeof params === 'string' ? params : params.name}`);
  }
}
