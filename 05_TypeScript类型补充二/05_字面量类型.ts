let message: 'hello' = 'hello'
console.log(message)
// message = 'hhh' 报错

// 字面量类型结合联合类型使用才有意义 ！！！
type Align = 'string' | 'number'

let align: Align = 'string'
align = 'number'
