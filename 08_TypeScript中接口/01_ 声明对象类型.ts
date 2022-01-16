// 1 用 type 通过别名声明
// type Obj = {
//   readonly name: string
//   age: number
//   friend?: {
//     name: string
//   }
// }

// 2 通过接口 interface 声明
// 也可以定义只读属性
// 也可以定义可选类型
interface IObj {
  readonly name: string
  age: number
  friend?: {
    name: string
  }
}

const obj: IObj = {
  name: 'dwj',
  age: 21
}
console.log(obj)
