# Write Clean Code

## [判断/赋值简化](./simplify.ts)

>+ false的条件: false,0,null,undefined,NaN,空字符串
>+ 非false的条件: 非0,非null,非undefined,非NaN,非空字符串

## 避免回调地狱

> 回调：一个函数，被作为参数传递给另一个函数，如数组的map方法。
>
> 回调地狱:回调函数嵌套过多导致的复杂逻辑和可读性降低的问题

### [Callback](./avoid-callback/callback.ts)

```ts
function doSomething(callback) {
    // 做一些事情...
    // 在完成之后调用回调函数
    callback();
}
```

### [Promise](./avoid-callback/promise.ts)

> Promise 是一个 ECMAScript 6 提供的类，目的是更加优雅地书写复杂的异步任务。
>
>+ Promise.resolve
>+ Promise.reject
>+ Promise...then...catch
>+ Promise.all

### [async/await](./avoid-callback/async-await.ts)

> Generator 函数的语法糖,Generator 函数是 ES6 提供的一种异步编程解决方案,相对于Generator，async内置了自动执行器，并且返回值是 Promise。

## 数据处理

>+ [对象](./data-handle/object.ts)
>+ [数组](./data-handle/array.ts)
>+ [Set&Map](./data-handle/set-map.ts)
