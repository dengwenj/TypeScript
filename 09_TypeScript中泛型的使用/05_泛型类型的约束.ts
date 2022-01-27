interface ILength {
  length: number
}

// 通过 extends 对类型来做限制，然后这个泛型不是随便传的,必须要包含 length 这个属性。 T 类型必须要有 ILength 类型， 你可以多，但你不能少
function foo<T extends ILength>(arg: T) {
  return arg.length
}

// console.log(foo(123)) 不能传 数字没有 length 属性
console.log(foo('dwj'));
console.log(foo(['dwj', 'zww']));
console.log(foo({ length: 6, name: "1" }));

// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };
type AA = 'qqq' | 'bbb' | 'ccc'
const aa: Record<AA, string> = {
  qqq: 'qqq',
  bbb: 'bbb',
  ccc: 'ccc'
}

// TypeScript允许我们遍历某种类型的属性，并通过keyof操作符提取其属性的名称。
// keyof操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
type hhg = keyof string

function foo1<T extends keyof string>(arg: T) {

}

foo('aaa')

// type vvv = {
//     [x: string]: any;
// }
// type bb = keyof vvv // string | number

type vvv = Record<string, any>
type bb = keyof vvv // string

