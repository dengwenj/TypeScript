// 声明模块
declare module 'dwj' {
  export function foo(hh: any[]): void
}

// 声明变量、函数、类
declare let name: string
declare let age: number

declare function foo(): void

declare class Person {
  name: string
  age: number

  constructor(name: string, age: number)
}

// 声明文件
declare module '*.jpg'

declare namespace d {
  export function f(): void  
}