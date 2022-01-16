interface IObj<T1 = string, T2 = number> { // 默认值
  name: T1
  age: T2
}

// const p: IObj<string, number> = {
//   name: 'dwj',
//   age: 21
// }
const p: IObj = {
  name: 'dwj',
  age: 21
}