interface IObj {
  name: string
  age: number
  sex: string
}


// 直接字面量赋值就报错
// const p: IObj = {
//   name: 'dengwenj',
//   age: 21,
//   sex: '男',
//   address: '上海市' // 这样会报错
// }

const info = {
  name: 'dengwenj',
  age: 21,
  sex: '男',
  address: '上海市'
}

const p: IObj = info // 这样就不会报错，这样会做一个擦除操作，会把多的擦除掉
console.log(p) // { name: 'dengwenj', age: 21, sex: '男', address: '上海市' }
