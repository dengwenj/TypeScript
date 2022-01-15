// 给参数加上类型注解： num1: number, num2: number
// 给返回值加上类型注解: (): number
// 在开发中，通常情况下不写返回值的类型（会自动推导）
function sum(num1: number, num2: number) {
  return num1 + num2
}

// sum(123) // 要写完，不能写一个，没有可选的
sum(123, 456)