class Person {
  // ts 中把很多动态的都删除掉，不让随便加，不写初始值的话，就要写在 constructor 里面
  name: string // 必须要写
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  say() {
    console.log('say')
  }
}

const p = new Person('dengwenj', 21)
console.log(p);
p.say()
