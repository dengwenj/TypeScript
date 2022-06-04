// 调用父类的方法可以使用 super 关键字
class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }

  run() {
    console.log('正在跑。。。')
    return this.name
  }
}

class S extends Person {
  constructor(name: string) {
    super(name)
  }

  run(): string {
    console.log(super.run() + 'is running')
    return ''
  }
}

const s = new S('w')
s.run()

interface IAB {
  name: string
  hh(): void
}

interface IB {
  bb(): void
}

interface IAWithB extends IAB {
  bb(): void
}

class A implements IAB {
  name: string
  constructor(name: string) {
    this.name = name
  }

  hh() {

  }
}

class B implements IAWithB {
  name: string

  hh() {

  }
  bb(): void {

  }
}
