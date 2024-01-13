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

class Dom {
  createEl(tag: string) {
    return document.createElement(tag)
  }
  setText(el: HTMLElement, text: string | null) {
    el.textContent = text
  }
  render(node: VNode) {
    const el = this.createEl(node.tag)
    if (node.children?.length) {
      for (const item of node.children) {
        const c = this.render(item) 
        console.log(c.textContent);
        el.appendChild(c) // el 作用域
      }
    } else {
      this.setText(el, node.text as string)
    }

    return el
  }
}

class Vue extends Dom implements VueCls {
  options: Options
  constructor(options: Options) {
    super()
    this.options = options
    this.init()
  }
  init(): void {
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
}

new Vue({
  el: '#app'
})
