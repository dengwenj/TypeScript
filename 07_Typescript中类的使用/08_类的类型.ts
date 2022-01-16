class Person {
  name: string = 'hhh'

  eating?() {
    console.log('fffff'); 
  }
}

const p1: Person = new Person()
const p2: Person = { name: 'dwj', eating() {} }


function foo(p: Person) {
  console.log(p.name)
  
  p.eating?.()
}
foo(new Person())
foo({ name: 'zww'})