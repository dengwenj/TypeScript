const a1: Object = 1
const a2: Object = '1'
const a3: Object = true
const a4: Object = []
const a5: Object = {}
const a6: Object = () => {}

// object 基础类型不行，只能是引用类型
// const b1: object = 1
// const b2: object = '1'
// const b3: object = false
const b4: object = []
const b5: object = {}
const b6: object = () => {}

// 这个不能赋值
const c1: {} = 1
const c2: {} = '1'
const c3: {} = false
const c4: {} = []
const c5: {} = { name: '朴睦' }
const c6: {} = () => {}