// 类型断言就是可以吧一个比较宽泛的类型转换成比较具体的类型
const img = document.getElementById('dwj') as HTMLImageElement
img.src = '地址'


class Person {}

class Student extends Person {
  say() {
    console.log('say');
  }
}

function sayhello(p: Person) {
  const s = p as Student
  s.say()
}
sayhello(new Student)