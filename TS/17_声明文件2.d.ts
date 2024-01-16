declare module 'express' {
  interface App {
    use: (url: string, router: any) => void
    listen(port: number, cb?: () => void): void
  }

  export type Code = 200 | 404 | 500
  interface Router {
    get(url: string, cb: (req: any, res: {
      json: (obj: { code: Code }) => void
    }) => void): void
  }

  // 定义一个函数
  interface Express {
    (): App
    // 给函数上面定义属性
    Router(): Router
  }

  const express: Express
  export default express
}

// declare let A: string
// declare function AAA(): {
//     obj: {name: string}
// } {
// }

/**
 * declare 可以用于声明全局类型
 */