const s13 = Symbol(1) // 唯一的
const s133 = Symbol(1) // 唯一的
// console.log(s13 === s133) // false

// for Symbol for 全局 symbol有没有注册过这个 key，如果有直接拿来用，没有的话就会去创建一个
console.log(Symbol.for('pumu') === Symbol.for('pumu')) // true

// 解决属性的 key 重复问题
const n13 = Symbol('name')
const obj13 = {
  name: '朴睦',
  [n13]: 'dwj'
}
console.log(obj13[n13]);
