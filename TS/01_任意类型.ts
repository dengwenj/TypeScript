// any 和 unknown
// unknown 只能赋值给自身或者是 any, 不能赋值给别人
// unknown 没有办法读任何属性，方法也不可以读取

let c: any = '11'
let a: unknown = 1
let b: number = 22
a = b
// b = a
