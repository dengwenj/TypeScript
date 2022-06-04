// 常量枚举 提高性能
const enum Dir {
  HH = 'hh',
  XX = 'xx',
  ZZ = 'zz'
}
if (Dir.HH === 'hh') {
  console.log('进入了')
}
