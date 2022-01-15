function cacl(a: number, b: number, fn: (num1: number, num2: number) => number) {
  return fn(a, b)
}

const res1 = cacl(10, 20, (a, b) => {
  return a + b
})
console.log(res1)

const res2 = cacl(10, 20, (a, b) => {
  return a * b
})

console.log(res2);
