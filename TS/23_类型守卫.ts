// 类型守卫
// 1、类型收缩 | 类型收窄
// 自定义守卫只能接受布尔值 is
// 如果这个函数返回 true 那么这个参数就是想要的类型
const isStr22 = (str: any): str is string => {
  return typeof str === 'string' 
}

const isNumber = (num: any): num is number => typeof num === 'number'

const isFunc = (fn: any): fn is Function => typeof fn === 'function'

class Demo23 {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
const d23 = new Demo23('朴睦', 24);
(Demo23.prototype as any).sex = '男'
// 遍历属性不能用 for in 因为 for in 会遍历原型上的属性
// for (const key in d23) {
//   console.log(key);
// }

interface Par {
  name: string
  age: number
  fn: () => void
  [p: string]: any
}
type Key23 = keyof Par
function foo23(par: Par) {
  (Object.keys(par)).forEach((key) => {
    let val 
    val = par[key]
    if (isStr22(val)) {
      par[key] = val.trim()
    } else if (isNumber(val)) {
      par[key] = val.toFixed(0)
    } else if (isFunc(val)) {
      par[key]()
    }
  })
}

const demo23 = {
  name: '朴睦    ',
  age: 24.111232,
  fn() {
    console.log("我是函数");
  }
}
foo23(demo23)
console.log(demo23);

