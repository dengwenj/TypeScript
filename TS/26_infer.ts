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

type Arr26 = ['a', 'b', 'c']
type F126<T extends any[]> = T extends [infer F, ...any[]] ? F : T 
type F1126<T extends any[]> = T extends [infer F, ...infer P] ? P : T 
type One26 = F126<Arr26>
type One261 = F1126<Arr26>
 
type Array26 = [1, 2, 3, 4]
type R26<T extends any[]> = T extends [infer O, ...infer L] ? [...R26<L>, O] : T
type RR26 = R26<Array26> 
