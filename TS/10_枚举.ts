enum Color {
  red,
  green,
  blue = 'blue'
}

console.log(Color.blue)

// 反向映射
enum E {
  success,
  error
}
const n: E = E.success
console.log(E[n]) // success


// const 枚举
const enum C {
  a,
  b,
  c
}
console.log(C.c)

enum T {
  a = 1,
  b = 5,
  c
}
console.log(T.c) // 6
