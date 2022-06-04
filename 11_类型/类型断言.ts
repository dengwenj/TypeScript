function fun(params: string | number) {
  // (params as string).length
  (<string>params).length // 类型断言 缩小
  // params as boolean 这样就不行， params 没有 boolean 类型
}