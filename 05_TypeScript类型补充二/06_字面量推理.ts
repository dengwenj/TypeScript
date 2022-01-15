type Method = 'GET' | 'POST'

function request(url: string, method: Method) {
  console.log(url, method)
}

// 第一种方法 直接吧类型写上
type Option = {
  url: string,
  method: Method
}
// const options: Option = {
//   url: 'https://www.dengwj.com',
//   method: 'POST'
// }

// 第二种方法用 字面量推理
const options = {
  url: 'https://www.dengwj.com',
  method: 'POST'
} as const

// 这就字面量推理了
// const options: {
//     readonly url: "https://www.dengwj.com";
//     readonly method: "POST";
// }

// request(options.url, options.method)

// 第三种方法，类型断言  ，原来是个字符串 现在变成 只有 post 和 get
// request(options.url, options.method as Method) 

// const option = options.method as Method  只是把他的类型变了，没有把他的值改变，原来是什么现在也是什么