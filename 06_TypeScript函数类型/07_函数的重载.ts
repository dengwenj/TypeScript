// 函数的重载: 函数名相同，参数不同（类型不同或个数不同），就是函数的重载
function foo6(num1: string, num2: string): string; // 不写函数体
function foo6(num1: number, num2: number): number;
function foo6(num1: string, num2: number): string;
function foo6(num1: number, num2: string): string

// 实现函数
function foo6(num1: any, num2: any): any {
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    return `${num1} and ${num2}`
  }
  return num1 + num2
}

// 在函数的重载中，实现函数是不能直接被调用的，要匹配到
console.log(foo6(1, 2));
console.log(foo6('dengwj', 'zww')); 
// console.log(foo6({ name: 'gg' }, 11)); 报错
