
// 定义一个泛型接口 IPerson表示一个类，它返回的实例对象取决于使用接口时传入的泛型T
interface IPerson<T> {  
  new(...args: any[]): T;
}
// type的写法
type IPerson2<T> = new(...args: any[]) => T

class App {
  render() {
    
  }
}
function foo18<T extends IPerson<App>>(base: T) {
  
}
foo18(App)

/**
 * 1、对象混入 合并 A 对象 B 对象，合并在一起
 * 2、类的混入 A类 B类 合并在一起
 */
const o18 = {
  age: 24
}
const obj18 = {
  name: '朴睦',
  arr: ['吃饭', '睡觉']
}
const ob18 = { ...o18, ...obj18 }
// 深拷贝 structuredClone 有版本支持
// const res18 = structuredClone(obj18)
// console.log(res18);
