// Set 集合是由一组无序且唯一(没有重复)的项组成的
const set: Set<number> = new Set([1, 2, 3, 4, 5, 5, 5])
// console.log(set);
// Set 如果引用类型存储地址是一样也会只留一个
let obj21: any = {
  name: '朴睦',
  age: 24
} 
let o21 = obj21
const set21: Set<Object> = new Set([obj21, o21])
// console.log(set21, 'set21');

// Map 的 key 可以是引用类型
const map21: Map<Object, any> = new Map([[{ name: "你好" }, "nihao"]])
map21.set(obj21, 'pumu')
for (const key of map21.keys()) {
  // console.log(key);
}

// WeakMap 不能取到键名和遍历 弱引用
const weakMap21 = new WeakMap()

weakMap21.set(obj21, 'hmm and ww')
// 现在有 2 个 指向 obj21 这个引用，obj21 和 o21，如果这两个引用都没有了，weakMap21 的 obj21 这个键的值也会消失
obj21 = null
// 可以用weakMap21.get(o21)，因为 o21 它指向的也是 obj 之前指向的那个对象
console.log(weakMap21.get(obj21)) // weakMap21.get(null) 这样肯定找不到的 undefined
console.log(weakMap21.get(o21)) // hmm and ww
o21 = null // 这里之后指向的那个对象彻底被释放了，没用引用指向它了，所以 weakMap21 里的那个键也释放了

// WeakSet 也是弱引用 不能取到键名和遍历和值 弱引用
let a21 = {
  name: 'hmm'
}
let b21 = a21
const weakSet21 = new WeakSet([a21, b21])
console.log(weakSet21.has(b21)); // true
