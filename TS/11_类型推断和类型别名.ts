// extends 用type定义时是包含的意思
// 左边的值会作为右边类型的子类型
// 1 any unknow
// 2 Object
// 3 Number
// 4 number
// 5 never
type num = 1 extends number ? 1 : 0 // 1
type num1 = 1 extends never ? 1 : 0 // 0

type s = { age: number } & { name: string }

const user11: s = {
  name: '朴睦',
  age: 24
}

let str = '你好世界'