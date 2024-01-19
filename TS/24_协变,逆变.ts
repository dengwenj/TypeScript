// 子类型完全覆盖主类型的属性。不可以少可以多
interface A {
  name: string
  age: number
}

interface B {
  name: string
  age: number
  sex: string
}

let a24: A = {
  name: '朴睦',
  age: 24
}

let b24: B = {
  name: 'pumu',
  age: 18,
  sex: '男'
}
// 协变
a24 = b24

// 逆变
let fn24 = (params: A) => {}
let fo24 = (params: B) => {}
fo24 = fn24