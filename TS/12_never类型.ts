type Name = 'pm' | 'dwj' | 'ww'

// never 将使用 never 类型来表示不应该存在的状态
function fn12(val: Name) {
  switch (val) {
    case 'dwj':
      break;
    case 'pm':
      break
    case 'ww':
      break
    default:
      // never 最后面的层级
      const v: never = val
      break;
  } 
}
