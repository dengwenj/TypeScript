// 类型参数化
// 在定义这个函数时，不决定这些参数的类型
// 而是让调用者以参数的形式告知这里的函数参数应该是什么类型

function sum<Type>(num: Type): Type {
  return num
}

// 自己写类型
sum<number>(1)
sum<any[]>(['123'])

// 2 类型的推导
sum(1244) // 字面量类型
sum('dwwdw')
sum(['ggg'])