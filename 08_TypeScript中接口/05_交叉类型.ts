// 一种组合类型的方式：联合类型
type DWJType = number | string
type DWJType2 = 'left' | 'right' | 'center'

// 另一种：交叉类型
type DWJType3 = string & number


interface IName {
  name: string
}

interface IAge {
  age: number
}

type DWJType4 = IName | IAge
type DWJType5 = IName & IAge

const obj1: DWJType4 = {
  name: 'dwj'
}

const obj2: DWJType5 = {
  name: 'zww',
  age: 2222222
}