interface IAA {
  name: string
  aa?: () => void
}

interface IBB {
  age?: number
  bb: (num: number) => void
}

// 也是使用extends关键字, 接口是支持多继承的（类不支持多继承）
interface ICC extends IAA, IBB {
  sex: string,
  cc: () => void
}

const person: ICC = {
  name: 'dwj',
  age: 21,
  sex: '男',
  cc() {
    console.log('cc');
  },
  bb(num) {
    console.log(num)
  }
}

console.log(person.name)
console.log(person.age)
console.log(person.sex)
person.bb(22222)
person.cc()



