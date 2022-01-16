interface ILength {
  length: number
}

// 通过 extends 对类型来做限制，然后这个泛型不是随便传的
function foo<T extends ILength>(arg: T) {
  return arg.length
}

// console.log(foo(123)) 不能传 数字没有 length 属性
console.log(foo('dwj'));
console.log(foo(['dwj', 'zww']));
console.log({ length: 6 });



