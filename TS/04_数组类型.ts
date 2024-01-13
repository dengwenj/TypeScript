const arr: number[] = [1, 2, 4]
// 使用泛型的方式
const arr1: Array<number> = [6, 7, 8]

const arr2: number[][] = [[1], [2]]

function fn4(...args: any[]) {
  
}
fn4(1, '2', true)
