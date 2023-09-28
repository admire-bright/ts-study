//接口
interface HeroBody {
  height: number;
  weight: number;
}
//联合类型
type HeroHobby = 'read' | 'write' | 'run' | 'eat';
// 类
export class OneHero {
  // 值类型
  name: string = 'Admire Bright';
  age: number = 18;
  boy: boolean = true;
  money: null = null;
  feature: symbol = Symbol('human');
  hobby: HeroHobby = 'eat';

  // 引用类型
  body: HeroBody = {height: 180, weight: 70};
  skills: string[] = ['write bug', 'read a novel', 'play games'];
  helloWorld(): void {
    console.log('hello world');
  }
}
