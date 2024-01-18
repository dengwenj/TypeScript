// proxy 和 Reflect 代理 13 个方法，参数一样

const person22 = {
  name: 'pumu',
  age: 24
}

// proxy 支持引用类型，拦截使用
const p22 = new Proxy(person22, {
  // 取值
  get(target, name, receiver) {
    return Reflect.get(target, name, receiver)
  },
  // 复制
  set(target, name, newVal, reciver) {
    console.log("我修改了值");
    // 修改值
    return Reflect.set(target, name, newVal, reciver)
  },
  // 拦截函数调用
  apply() {},
  // 拦截 in 操作符
  has() {
    return true
  },
  // 拦截 for in
  // ownKeys() {
  // }
  // 拦截 new 操作符
  // construct() {}
  // 拦截删除的操作
  // deleteProperty() {}
})
// console.log(p22.age, 'p22.age');
// p22.age = 18
// console.log(p22.age, 'ww');

const arr22: Function[] = []
const watch = (fn: (...args: any[]) => void) => {
  // 说明没有过
  if (arr22.every((item) => item !== fn)) {
    arr22.push(fn)
  }
}

function observable<T extends object>(target: T) {
  return new Proxy(target, {
    get(target, name, receiver) {
      return Reflect.get(target, name, receiver)
    },
    set(target, name, newValue, receiver) {
      const res = Reflect.set(target, name, newValue, receiver)
      arr22.forEach((fn) => fn.apply(this, [target, name, newValue]))
      return res
    },
  })
}

watch((target, name, newValue) => {
  console.log(target[name])
  console.log(`我修改了${target} 的 ${name} 为 ${newValue}`)
})

const proxy22 = observable({
  name: '朴睦',
  age: 24
})

console.log(person22.age, 'ww');
proxy22.age = 102
proxy22.name = "pumu"
