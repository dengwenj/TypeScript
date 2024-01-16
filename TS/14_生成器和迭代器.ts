// Generator 生成器
function* g14() {
  yield new Promise((resolve) => {
    setTimeout(() => {
      resolve('成功')
    }, 2000);
  })
  yield "朴睦"
  yield 'dwj'
} 
const res = g14()
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

// 迭代器 iterator
const map1: Map<any, any> = new Map([['属性名', '属性值']])
const arr14 = [1, 2, 3] 
map1.set(arr14, () => '你好')
// console.log(map1.get(arr14)())

const set14: Set<number> = new Set([1, 1, 2, 2, 3, 4]) // 去重
// console.log([...set14])

// const each = (val: any) => {
//   const iterator = val[Symbol.iterator]()

//   let next = { value: undefined, done: false }
//   while (!next.done) {
//     next = iterator.next()
//     if (!next.done) {
//       console.log(next.value)
//     }
//   }
// }
// each(set14)

// 迭代器语法 iterator 的语法糖 for of
// for (const val of set14) {
//   console.log(val) 
// }

// for of 对象不能用，因为没有迭代器, 我们可以手写来支持
const obj14 = {
  min: 0,
  max: 24,
  [Symbol.iterator]() {
    // 返回的一个对象，对象里面有 nest 函数, nest 函数返回的是一个对象 value, done
    let current = this.min
    return {
      next: () => {
        let obj 
        if (this.max >= current) {
          obj = {
            value: current,
            done: false,
          }
          current++
        } else {
          obj = {
            value: undefined,
            done: true
          }
        }
        return obj
      }
    }
  }
}
for (const item of obj14) {
  const it = obj14[Symbol.iterator]()
  let next = { value: undefined, done: false }
  while (!next.done) {
    next = it.next() as any
    console.log(next)
  }
  console.log(item)
}
// 解构底层原理也是去调用 iterator
const [o1, o2] = obj14
console.log(o1, o2); // 0 1

