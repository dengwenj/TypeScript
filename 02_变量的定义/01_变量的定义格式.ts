// : number 是类型注解
// string 和 String 的区别
// string: TypeScript的字符串类型 String: JavaScript 的字符串包装类的类型

var num: number = 133
let message: string = 'hello'
const age: number = 21

// let str: String = 'ddd'

// 类型推断, 没有添加类型注解的话会自动推断
let foo = 'foo'
// foo = 13