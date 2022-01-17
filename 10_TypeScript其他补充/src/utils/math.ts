// 命名空间里面的东西想要在外面拿到的话，也是需要导出的，
// 把一个模块在拿来划分作用域

export namespace dwj {
  export let person: string = 'dengwj'
}

export namespace zww {
  export let person: string = 'zww'
}

console.log(dwj.person);

console.log(zww.person);
