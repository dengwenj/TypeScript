interface DCls {
  emit(name: string, ...args: any[]): void
  on(name: string, fn: (...args: any[]) => void): void
  off(name: string, fn: (...args: any[]) => void): void
  once(name: string, fn: (...args: any[]) => void): void
}

interface List {
  [key: string]: Function[]
}

class Dispatch implements DCls {
  private list: List

  constructor() {
    this.list = {}
  }

  emit(name: string, ...args: any[]): void {
    const fnList = this.list[name]

    if (fnList) {
      for (const fn of fnList) {
        // once 把 name 删除了 就不调了
        if (this.list[name]) {
          fn.apply(this, args)
        }
      }
    } else {
      // 名字写错了
      console.log(`emit名字写错了, ${name}`)
    }
  }

  on(name: string, fn: (...args: any[]) => void): void {
    const fns = this.list[name] || []
    fns.push(fn)
    this.list[name] = fns
  }

  off(name: string, fn: (...args: any[]) => void): void {
    const fns = this.list[name]
    if (fns) {
      // 删除这个函数
      const idx = fns.findIndex((item) => item === fn)
      this.list[name].splice(idx, 1)
      
      if (!this.list[name].length) {
        delete this.list[name]
      }
    } else {
      console.log(`off名字写错了${name}`)
    }
  }

  // 只执行一次
  once(name: string, fn: (...args: any[]) => void): void {
    const de = (...args: any[]) => {
      fn.apply(this, args)
      // this.off(name, de)
      delete this.list[name]
    }
    this.on(name, de)
  }
}
const d = new Dispatch()

d.on('dwj', (...args: any[]) => {
  console.log(args, '只执行一次这里');
})
d.once('dwj', (...args: any[]) => {
  console.log(args, '只执行一次');
})

// d.on('dwj', (...args: any[]) => {
//   console.log(args, '下面');
// })

// const fn20 = (...args: any[]) => {
//   console.log(args, '我是韩梅梅');
// }
// d.on('hmm', fn20)

d.emit('dwj', 24, "男")
d.emit('dwj', 24, "男")
// d.emit('hmm', 24, "女")

// d.off('hmm', fn20)
