---
title: "Promise"
date: "2024-08-12"
author:
  name: qiqzhao
---

## 介绍

异步编程的一种解决方案

与回调函数的对比

- 链式操作降低了代码难度
- 代码可读性增强

1. 状态

- pending 进行中
- fulfilled 已成功
- rejected 已失败

2. 特点

- 对象状态不受外界影响，只有异步操作的结果，可以决定当前是什么状态
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果

## 用法

```Javascripte
const promise = new Promise(function(resolve, reject){});
```

Promise 构造函数接受一个函数作为参数，该函数的两个参数分别为 resolve 和 reject

- resolve 将 promise 对象从 未完成变为成功
- reject 将 promise 对象从 未完成变为失败

promise 实例方法：

1. then()
  - 实例状态发生改变时的回调函数，第一个参数是 resolved 状态的回调函数，第二个参数是 rejected 状态的回调函数

  - 返回值是一个新的 promise

2. catch()
  - 用于指定发生错误时的回调函数

3. finally()
  - 指定不管 promise 对象最后状态如何，都会执行的操作

promise 构造函数方法：

1. all()
  - 接受一个数组作为参数，数组成员都为 promise 实例
  - 只有所有的 promise 都是 fulfilled，最终才是 fulfilled 状态
  - 有一个是 rejected，最终就是 rejected 状态

2. race()
  - 将多个 promise 实例，包装成一个新的 promise 实例
  - 有一个实例率先改变状态，则状态改变

3. allSettled()
  - 接受一组 promise 实例作为参数，包装成一个新的实例
  - 只有等到所有实例都返回结果，不管是 fulfilled 还是 rejecte，实例才会结束

4. resolve()
  - 将现有对象转为 promise 对象

5. reject()
  - 返回一个新的 promise 实例，状态为 rejected
  
## 使用场景

- all() 实现多个请求合并在一起，汇总请求结果

- race() 可设置图片请求超时