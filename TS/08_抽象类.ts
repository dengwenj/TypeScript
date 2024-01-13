// 基类 抽象类
// abstract 所定义的类为抽象类
// abstract 所定义的方法都只能描述不能进行实现
// 抽象类无法被实例化

abstract class FReact {
  name: string | undefined
  constructor(name?: string) {
    this.name = name
  }

  getName() {
    return this.name
  }

  abstract mounted(): void

  abstract updated(val: any): void
}

class MyReact extends FReact {
  constructor() {
    super()
  }
  setName(name: string) {
    this.name = name
  }
  mounted(): void {}
  updated(val: any): void {}
}

const r = new MyReact()
r.setName('朴睦')
console.log(r.getName())
