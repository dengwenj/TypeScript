type object1 = {
  name: string,
  age?: number,
  friend?: {
    name: string,
    age?: number
  }
}

const info: object1 = {
  name: 'dwj',
  friend: {
    name: 'hh'
  }
}

// 可选链作用：当对象的属性不存在时，会短路，直接返回 undefined，如果存在，才会继续执行

console.log(info.friend?.name);
