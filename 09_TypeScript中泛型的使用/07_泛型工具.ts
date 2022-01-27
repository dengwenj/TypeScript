// 泛型工具

// Partial<T> 此工具的作用就是将泛型中全部属性变为可选的。
type Partial<T> = {
	[P in keyof T]?: T[P]
}

// Record<K, T> 此工具的作用是将 K 中所有属性值转化为 T 类型，我们常用它来申明一个普通 object 对象。
type Record<K extends keyof any, T> = { // keyof any对应的类型为number | string | symbol
  [key in K]: T
}
type Lh = 'age' | 'sex'
type HH = Record<Lh, number> 
type HHH = Record<string, number>
const n: HH = {
  age: 22,
  sex: 33
}

// Pick<T, K> 此工具的作用是将 T 类型中的 K 键列表提取出来，生成新的子键值对类型。
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type Person = {
  name: string
  age: number
  sex: string
}
type FilterPerson = Pick<Person, 'name' | 'age'>
const p: FilterPerson = {
  name: 'dengwj',
  age: 22
}

// Exclude<T, U> 此工具是在 T 类型中，去除 T 类型和 U 类型的交集，返回剩余的部分类型。
type Exclude<T, U> = T extends U ? never : T
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;   // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// Omit<T, K> 此工具可认为是适用于键值对对象的 Exclude，它会去除类型 T 中包含 K 的键值对。
// type Omit = Pick<T, Exclude<keyof T, K>>
type D = {
  name: string,
  age: number,
  firend: string
}
type FD = Omit<D, 'age'>
const fd: FD = {
  name: 'dwj',
  firend: 'zww'
}

// ReturnType<T> 此工具就是获取 T 类型(函数)对应的返回值类型：
// function foo(x: string | number): string | number { /*..*/ }
// type FooType = ReturnType<typeof foo>;  // string | number

// Required<T> 此工具可以将类型 T 中所有的属性变为必选项。
type Required<T> = {
  [P in keyof T]-?: T[P]
}

// 语法-?，可以理解为就是 TS 中把?可选属性减去的意思

export {}

