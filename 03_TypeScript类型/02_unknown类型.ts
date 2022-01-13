// 用来描述不确定的类型

// unknown 类型只能赋值给 any 和 unknown 类型
// any 类型可以赋值给任意的类型
let msg: unknown 
// let msg: any

function foo() {
  return 123
}

function bar() {
  return 'bar'
}

const flag = true

if (flag) {
  msg = foo()
} else {
  msg = bar()
}

let hh: string = msg
let xx: number = msg


export {}