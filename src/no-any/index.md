# *Type* script

## [类型声明](./primary/declaration.ts)

>+ 值类型(number, string, boolean, null, undefined, symbol, bigint)
>+ 引用类型(object)
>+ 其他typescript内置类型(Array, Date, Error, Function, RegExp, Promise, Never...)

## [类型定义](./primary/definition.ts)

>+ 接口(interface)
>+ 类型(type)
>+ 类(class)

## [类型推断/断言](./primary/assertion.ts)

>+ as (value as AnyType)
>+ <> (< AnyType >value)
>+ ! (objectValue! => value is not null/undefined)
>+ ? (objectValue? => value maybe null/undefined)

## [关键字](./middle/keyword.ts)

>+ as 类型断言
>+ type 类型别名
>+ interface 接口
>+ class 类
>+ public/private/protected 访问修饰符
>+ readonly 只读
>+ static 静态
>+ **extends 继承/归属于**
>+ **implements 实现**
>+ abstract 抽象
>+ override 重写
>+ overload 重载
>+ [declare 声明](./index.d.ts)
>+ namespace 命名空间
>+ infer...

## [类型运算](./middle/operation.ts)

>+ & 联合类型
>+ | 交叉类型
>+ typeof 实例类型
>+ keyof 对象类型的键值联合类型
>+ in 在...中

## [泛型](./middle/generic.ts)

>+ 泛型类型
>+ 泛型接口
>+ 泛型函数
>+ 泛型约束
