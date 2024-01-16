// 函数、interface、type 都可以使用 泛型
// 动态类型, 写的时候不知道是什么类型，用的时候才知道
function fn15<T>(n: T, n1: T): T[] {
  return [n, n1]
}
fn15(1, 2)

interface Data14<T> {
  name: T
}

const user14: Data14<string> = {
  name: '朴睦'
}

type D14<T, K = any[]> = number | string | T | K
const u14: D14<boolean, number[]> = [1, 2, 3]
