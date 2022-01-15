// !! 将一个其他类型转换为 boolean类型
// ?? 空值合并运算符

let aa = 'hello'

console.log(!!aa); // true


let message: string | null = null

// 当 message 是 null 或者 undefined 的时候就展示后面的，反之
message = message ?? 'dengwenj'
console.log(message) // dengwenj
