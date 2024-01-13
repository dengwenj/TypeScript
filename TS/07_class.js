"use strict";
// 1 class 的基本用法 继承 和 类型约束 implements
class Dom {
    createEl(tag) {
        return document.createElement(tag);
    }
    setText(el, text) {
        el.textContent = text;
    }
    render(node) {
        var _a;
        const el = this.createEl(node.tag);
        if ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) {
            for (const item of node.children) {
                const c = this.render(item);
                console.log(c.textContent);
                el.appendChild(c); // el 作用域
            }
        }
        else {
            this.setText(el, node.text);
        }
        return el;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        const data = {
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
        };
        const appEl = document.querySelector(this.options.el);
        appEl === null || appEl === void 0 ? void 0 : appEl.appendChild(this.render(data));
    }
}
new Vue({
    el: '#app'
});
