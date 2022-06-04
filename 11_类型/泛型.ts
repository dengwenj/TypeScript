interface ILength {
  length: number
}

function fn<T extends ILength>(args: T): T {
  return
}

// fn(1) 报错
fn({ length: 111, gg: 222 })
fn([1, 2, 3])
fn('aaa')

// 类和接口的泛型
class Person<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}
const p = new Person<string>('dengwenjie')

interface IHHH<T> {
  hhh: T
}
const hhh: IHHH<string> = {
  hhh: 'hhh'
}
