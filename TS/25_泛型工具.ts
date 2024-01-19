// 类型里面 in 后面接受一个联合类型
// Partial 所有属性 可选的意思 接受一个泛型
// Required 所有属性 必选的意思
// Pick 提取部分属性
// Exclude 排除部分属性（联合类型）
// Omit 排除部分属性 并且返回新的类型（接口）

interface User25 {
  name?: string
  age: number
  sex: string
}

// 变为可选
type PUser25 = Partial<User25>
// 手写 Partial
type SPartial<T> = {
  [key in keyof T]?: T[key]
}

// 变为必选
type PRUser = Required<User25>
// 手写 Required
type SPRUser<T> = {
  [key in keyof T]-?: T[key]
}

// Pick 提取了 name 和 age
type PickUset = Pick<User25, 'age' | 'name'>
// 手写 Pick
type SPickUset<T, K extends keyof T> = {
  [key in K]: T[K]
}
type SPickUsetS = SPickUset<User25, 'sex' | 'name'>

// Exclude
type Exclude25 = Exclude<'name' | 'age' | 'sex', 'sex'>
// 手写 Exclude
// never 在联合类型中会取消掉
type SExclude<T, K> = T extends K ? never : T

// Omit 排除部分属性
type Omit25 = Omit<User25, 'sex'>
// 手写 Omit
type SOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
const obj25: SOmit<User25, 'age'> = {
  sex: '',
  name: ''
}

// Record
// ReturnType