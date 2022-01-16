class Person { 
  // private 私有的，只能在类里面访问，外面访问不了
  private name: string = 'ww'

  getName() {
    return this.name
  }

  setName(newName: string) {
    this.name = newName
  }
}

const p = new Person()
console.log(p.getName())
p.setName('dwj')
console.log(p.getName())


class DD {
  // protected 只能在父类和子类中访问，在外面访问不了
  protected age: number = 222
}

class EE extends DD {
  getAge() {
    return this.age
  }
}

const e = new EE()
console.log(e.getAge());

