// 联合类型 ：string | number | boolean
function foo(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log(id.toLocaleLowerCase())
  } else {
    console.log(id)    
  }
}

foo(1)
foo('asd')
foo(true)