function fn5(num1: number = 10, num2?: number): number {
  return num1 + (num2 ?? 0)
}

interface Obj5 {
  name: string[]
  // ts 可以定义 this 的类型，在 js 中无法使用，必须是第一个参数定义 this 的类型
  add: (this: Obj5, name: string) => void
} 
const obj5: Obj5 = {
  name: ['朴睦'],
  add(name: string) {
    this.name.push(name)
  }
}
obj5.add('ww')
console.log(obj5)

interface User {
  name: string
  age: number
}
// 函数的重载: 函数名相同，参数不同（类型不同或个数不同），就是函数的重载
function foo5(num1: string, num2: string): string; // 不写函数体
function foo5(num1: number, num2: number): number;
function foo5(): User
function foo5(num1?: number | string, num2?: number | string): number | string | User {
  // 根据不同的参数进行不同的判断
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else if (typeof num1 === 'string'  && typeof num2 === 'string') {
    return '你好世界'
  } else {
    return {
      name: '朴睦',
      age: 24
    }
  }
}
const f5555 = foo5()