function foo(num1: number, ...nums: number[]) {
  let totle = num1
  for (const num of nums) {
    totle += num
  }

  return totle
}

console.log(foo(20, 30, 40));
