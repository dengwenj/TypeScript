interface IPerson {
  name: string
  age: number
  readonly hobby: string[]
}

const person: IPerson = {
  name: 'dengwenjie',
  age: 22,
  hobby: ['睡觉', '当社会人']
}
person.hobby.push('烫头')
// person.hobby = 'gggg' 错误

const hh: () => () => {} = () => {
  return () => {
    return {}
  }
}

interface H {
  hh(): void
}

const h: H = {
  hh() {
  }
}

interface A {
  (): void
}

const a: A = () => {}
 