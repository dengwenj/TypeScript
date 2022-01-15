// function foo() {
//   console.log(this.name)
// }

// const obj = {
//   name: 'zww',
//   foo
// }
// obj.foo()

// 声明 this 的类型，可以使用哪些数据就写在这里
type ThisType = { name: string, age: number };

// 第一个中写的 this
function eating(this: ThisType, message: string) {
  console.log(this) // { name: 'dwj', age: 21, sex: '男', eating: [Function: eating] }
  console.log(this.age) // 21
  console.log(this.name + message);
  // console.log(this.sex); // 类型“ThisType”上不存在属性“sex”。
  
}

const info = {
  name: "dwj",
  age: 21,
  sex: '男',
  eating: eating,
};

// 隐式绑定
// info.eating("哈哈哈");

// 显示绑定
// eating.call({name: "kobe"}, "呵呵呵")
// eating.apply({name: "james"}, ["嘿嘿嘿"])

export {};

// 'this' 隐含类型为 'any'，因为它没有类型注释。 报错的意思
type ThisType1 = { name: string, saying: () => void }
function foo3(this: ThisType1, message: string) {
  console.log(this) // { name: 'zww', saying: [Function: saying], sex: '女' }
  this.saying()
  // console.log(this.name)
  const a = () => {
    console.log(this.name);
  }
  a()
}
foo3.call({ name: 'zww', saying() {console.log('dwj')}, sex: '女' }, 'dd')