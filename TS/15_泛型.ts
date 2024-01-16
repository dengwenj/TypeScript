// 函数、interface、type 都可以使用 泛型
// 动态类型, 写的时候不知道是什么类型，用的时候才知道
function fn15<T>(n: T, n1: T): T[] {
  return [n, n1]
}
fn15(1, 2)

interface Data14<T> {
  name: T
}

const user14: Data14<string> = {
  name: '朴睦'
}

type D14<T, K = any[]> = number | string | T | K
const u14: D14<boolean, number[]> = [1, 2, 3]

// 泛型约束
// 在类型后面跟一个 extends 在跟一个约束的类型
type A15<T extends number> = T
const a15: A15<1> = 1 

interface Len15 {
  length: number
}
function bar15<T extends Len15>(n: T) {
  console.log(n);
}
bar15('111')
bar15([1, 2])
// bar15(111) 报错

// 约束对象的 key 用 keyof
const obj15 = {
  name: '朴睦',
  age: 24
}
type OBJ15 = keyof typeof obj15
// keyof 会变成联合类型
function foo15<T>(obj: T, key: keyof T) {
  console.log(obj[key]);
  
}
foo15({
  name: '1',
  age: 24
}, 'name')

// 变为可选和只读的
interface User15 {
  name: string
  age: number
  sex: string
}

type U15 = {
  readonly [key in keyof User15]?: User15[key]
}
