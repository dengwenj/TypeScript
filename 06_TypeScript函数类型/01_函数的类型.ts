function foo(num: number): number {
  return 123
}


type AddFnType = (num1: number, num2: number) => number
const add: AddFnType = (num1, num2) => {
  return num1 + num2
}
add(1, 2)