// 1 class 的基本用法 继承 和 类型约束 implements

interface Options {
  el: string
}

interface VueCls {
  options: Options
  init(): void
}

interface VNode {
  tag: string
  text?: string
  children?: VNode[]
}

// readonly 只读的
// private 只能在内部使用，不能在子类中使用，也不可以在实例上使用
// protected 在内部和子类中使用，不能在外部使用(实例上使用)
// public 默认属性和方法是 public，哪里都可以用(内部，外部，子类) 
class Dom {
  private createEl(tag: string) {
    return document.createElement(tag)
  }
  private setText(el: HTMLElement, text: string | null) {
    el.textContent = text
  }
  protected render(node: VNode) {
    const el = this.createEl(node.tag)
    if (node.children?.length) {
      for (const item of node.children) {
        const c = this.render(item) 
        el.appendChild(c) // el 作用域
      }
    } else {
      this.setText(el, node.text as string)
    }

    return el
  }
}

class Vue extends Dom implements VueCls {
  readonly options: Options
  private _val: string
  constructor(options: Options, val: string) {
    super()
    this.options = options
    this.init()
    this._val = val
  }
  public init(): void {
    const data: VNode = {
      tag: 'div',
      children: [
        {
          tag: 'span',
          text: '你好'
        },
        {
          tag: 'span',
          text: '世界'
        }
      ]
    }
    const appEl = document.querySelector(this.options.el)
    appEl?.appendChild(this.render(data))
  }
  static version() {
    console.log('1.0.1')
  }

  // 拦截器
  get val() {
    return this._val + ' 24'
  }
  set val(newVal) {
    this._val = newVal
  }
}
Vue.version()

const v = new Vue({
  el: '#app'
}, '朴睦')
console.log(v.val)
v.val = 'dwj'
console.log(v.val)
