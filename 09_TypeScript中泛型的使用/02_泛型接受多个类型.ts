// 泛型可以接受多个类型
function foo<T, O, S>(num1: T, obj: O, str: S, ...args: T[]) {
  console.log(num1, obj, str, args);
}

foo(1, { name: 'gg' }, 'ggg')

foo<string, boolean, string[]>('dwj', true, ['zww'], 'sss', 'zzz', 'jjj')