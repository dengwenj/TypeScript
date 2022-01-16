class Person<T, N> {
  name: T
  age: N
  sex: T

  constructor(name: T, age: N, sex: T) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}

const p1 = new Person('dwj', 21, '男')
const p2 = new Person<string, number>('dwj', 21, '男')
const p3: Person<string, number> = new Person('dwj', 21, '男')
console.log(p1); // Person { name: 'dwj', age: 21, sex: '男' }
