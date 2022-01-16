class Person {
  // 只读属性是可以在构造器中赋值，赋值之后不能修改
  // readonly 是他的引用不能被修改
  readonly name: string
  age?: number
  readonly friend?: Person

  constructor(name: string, friend?: Person, age?: number) {
    this.name = name
    this.friend = friend
    this.age = age
  }
}
const p = new Person('dwj', new Person('zww'))
console.log(p.name);
// p.name = 'sd' 不能修改
console.log(p);

if (p.friend) {
  p.friend.age = 19
}




