class Person {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  // 访问器  getter 和 setter
  set name(newName: string) {
    this._name = newName
  }

  get name() {
    return this._name
  }
}

const p = new Person('dwj')
console.log(p);
console.log(p.name) // dwj

p.name = 'zww'
console.log(p.name) // zww

