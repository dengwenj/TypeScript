// 可选类型：{ x?: number, y?: number }
function foo(point: { x: number, y: number, z?: number }) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
  
}
foo({ x: 133, y: 455 })
foo({ x: 1, y: 2, z: 3 })
