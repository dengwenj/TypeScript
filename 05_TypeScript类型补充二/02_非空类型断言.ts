function foo(message?: string) {
  console.log(message!.length); // 非空类型断言，表示可以确定某个标识符是有值的 message!.length
}
foo('123')