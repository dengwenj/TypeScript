// namespace 所有的变量以及方法必须要导出才能访问
// 内部模块，主要用于组织代码，避免命名冲突
// 嵌套、抽离、导出、简化、合并

const test1 = 10
export namespace Test {
  export const test1 = 1
  export function foo() {
    console.log(test1);
    
    console.log('test foo') 
  }
  export namespace Test2 {
    export const test1 = 2
  }
}

export namespace Test {
  export const test2 = 2
}

Test.foo()
