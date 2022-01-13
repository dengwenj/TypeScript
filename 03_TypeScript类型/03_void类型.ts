// void 类型 当一个函数没有返回值的时候就是 void 类型

function foo(num1: number, num2: number): void{ // 这里就是没有返回值, 可以不写
  console.log(num1);
  console.log(num2);
}

foo(1, 2)

export {}