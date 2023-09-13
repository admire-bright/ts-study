export interface HeroBody {
  height: number;
  weight: number;
}
export type HeroHobby = 'read' | 'write' | 'run' | 'eat';
export interface HeroJob {
  id: string;
  job: string;
}

// 类
export class OneHero {
  // 值类型
  name: string = 'mountain zeng';
  age: number = 18;
  boy: boolean = true;
  money: null = null;
  feature: symbol = Symbol('human');
  hobby = <HeroHobby>'eat';

  // 引用类型
  body = { height: 180, weight: 70 } as HeroBody;
  skills: string[] = ['write bug', 'read a novel', 'play games'];
  heroJob?: HeroJob = { id: '', job: '' };
  helloWorld(): void {
    console.log('hello world');
  }
  setHeroJob() {
    this.heroJob!.id = '123';
    this.heroJob!.job = 'coder';
  }
  getHeroJobId() {
    return this.heroJob?.id;
  }
}
