// 重名 重合
interface PM {
  sex: string
}
interface PM extends WW {
  // 只读
  readonly id: string
  name: string
  age: number
  // 任意key 索引签名 允许添加新的任意属性
  [propName: string]: any
}

// 接口继承
interface WW {
  hh?: string
}

// 定义函数
interface Fn {
  (age: number): number[]
}

const obj: PM = {
  id: '123321',
  name: '朴睦',
  age: 24,
  sex: '男',
  hh: 'hh'
}

const fn: Fn = (age: number) => {
  return [age]
}
