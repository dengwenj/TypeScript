//  type CalcFn = (n1: number, n2: number) => number
interface IFunc {
  (num1: number, num2: number): number // 定义函数类型
}

const add: IFunc = (num1, num2) => {
  return num1 + num2
}

console.log(add(1, 2));
