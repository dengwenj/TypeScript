function foo(num1: number, num2?: number) {
  
}

// 顺序： 参数----默认值----可选参数
function foo2(num3: number, num4: number = 50) {
  console.log(num3, num4);
}
foo2(1)
foo2(0, 30)