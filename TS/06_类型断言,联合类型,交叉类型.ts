// 类型断言
const app06: any = '你好 app'
console.log((app06 as string).length)
console.log((<string>app06).length)

// 联合类型
let p: string | number = '010-18398298'
p = 1321311333

// 交叉类型
interface A6 {
  name: string
  age: number
}
interface B6 {
  sex: string
}
const user: A6 & B6  = {
  name: '朴睦',
  age: 24,
  sex: '男'
}
