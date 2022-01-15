function foo(num: number): number {
  return 123
}


type AddFnType = (num1: number, num2: number) => number
const add: AddFnType = (num1: number, num2: number) => {
  return num1 + num2
}