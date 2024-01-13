"use strict";
function fn5(num1 = 10, num2) {
    return num1 + (num2 !== null && num2 !== void 0 ? num2 : 0);
}
const obj5 = {
    name: ['朴睦'],
    add(name) {
        this.name.push(name);
    }
};
obj5.add('ww');
console.log(obj5);
function foo5(num1, num2) {
    // 根据不同的参数进行不同的判断
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return '你好世界';
    }
    else {
        return {
            name: '朴睦',
            age: 24
        };
    }
}
const f5555 = foo5();
