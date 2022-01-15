class Person {
  say(){}
}

// function foo(message: Person) {

// } ？？？？？？？？？？？？？？？


// 1 typeof
// 2 === switch 等
// 3 instancof
// 4 in

// 1
type ID = string | Person
function foo(id: ID) {
  if (typeof id === 'string') {
    console.log(id.length);
  } else {
    console.log(id.say);
  }
}

// 2
type Ttpe = 'string' | 1
function foo1(type: Ttpe) {
  if (type === 'string') {
    console.log(type.length)
  } else {
    console.log(type.toFixed);
  }
}

// 3
class Student { 
  hh() {}
}
class Dwj {
  xx() {}
}
function foo3(sd: Student | Dwj) {
  if (sd instanceof Student) {
    console.log(sd.hh);
  } else {
    console.log(sd.xx);
  }
}
foo3(new Student)

// 4
type XS = {
  zww: () => void
}
type VS = {
  dwj(): () => void
}
function foo4(xv: XS | VS) {
  if ('zww' in xv) {
    console.log(xv.zww);
  } else {
    console.log(xv.dwj);
  }
}

