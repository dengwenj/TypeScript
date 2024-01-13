"use strict";
// 基类 抽象类
// abstract 所定义的类为抽象类
// abstract 所定义的方法都只能描述不能进行实现
// 抽象类无法被实例化
class FReact {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class MyReact extends FReact {
    constructor() {
        super();
    }
    setName(name) {
        this.name = name;
    }
    mounted() { }
    updated(val) { }
}
const r = new MyReact();
r.setName('朴睦');
console.log(r.getName());
