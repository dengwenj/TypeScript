// function foo() {
//   console.log(this.name)
// }

// const obj = {
//   name: 'zww',
//   foo
// }
// obj.foo()

type ThisType = { name: string, age: number };

// 第一个中写的 this
function eating(this: ThisType, message: string) {
  console.log(this)
  console.log(this.age)
  console.log(this.name + message);
  // console.log(this.name + " eating", message);
}

const info = {
  name: "dwj",
  age: 21,
  eating: eating,
};

// 隐式绑定
info.eating("哈哈哈");

// 显示绑定
// eating.call({name: "kobe"}, "呵呵呵")
// eating.apply({name: "james"}, ["嘿嘿嘿"])

export {};
