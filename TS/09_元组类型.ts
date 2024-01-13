const arr9: readonly [a: number, b: string, c?: string] = [24, '朴睦'] // c 可以不传
console.log(arr9[0])
// 通过值去获取类型 typeof
type F = typeof arr9[0]
