"use strict";
// any 和 unknown
// unknown 只能赋值给自身或者是 any, 不能赋值给别人
// unknown 没有办法读任何属性，方法也不可以读取
let c = '11';
let a = 1;
let b = 22;
a = b;
// b = a
