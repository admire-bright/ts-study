export class OneHero {
  // 值类型
  name: string = 'Admire Bright';
  age: number = 18;
  boy: boolean = true;
  money: null = null;
  feature: symbol = Symbol('human');

  // 引用类型
  body: {height: number; weight: number} = {height: 180, weight: 70};
  skills: string[] = ['write bug', 'read a novel', 'play games'];
  helloWorld(): void {
    console.log('hello world');
  }
}
