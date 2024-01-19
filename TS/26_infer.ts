// infer 就是推导泛型参数
// infer 声明只能出现在 extends 子语句中

interface User26 {
  name: '朴睦',
  age: 24,
  sex: '男'
}
// 推导 promise 返回的类型
type P26 = Promise<User26>
type InferP<T> = T extends Promise<infer U> ? InferP<U> : T //  InferP<U> 递归操作
type U26 = InferP<P26> 

// infer 协变，产生协变会返回联合类型
const obj26 = {
  name: 'PM',
  age: 24
}
type Ojb26<T> = T extends { name: infer N, age: infer A } ? [N, A] : T
type O26 = Ojb26<typeof obj26>

// infer 逆变返回的是交叉类型
type JX = number & string
type F26<T> = T extends {
  a: (a: infer A) => void
  b: (b: infer A) => void
} ? A : unknown
type Foo26 = F26<{
  a: (a: string) => void
  b: (a: number) => void
}>
