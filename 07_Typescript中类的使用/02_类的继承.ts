class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log('eating');
  }
}

// super() 可调用父类的构造函数，也可以调用父类的方法  super.eating()
class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    super(name, age)
    this.sno = sno
  }

  eating() {
    super.eating()
    console.log('eating2');
  }

  stu() {
    console.log('学习')
  }
}
const s = new Student('dengwj', 21, 101)
console.log(s.name)
console.log(s.age)
s.eating()
s.stu()




