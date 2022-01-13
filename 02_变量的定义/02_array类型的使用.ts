// 一个数组在 TypeScript 开发中, 最好存放的数据类型是固定的(string)
const name1: Array<string> = [] // 不推荐（reaxt中有冲突）
const name2: string[] = [] // 推荐

// 在数组中存放不同的类型是不好的
// name1.push(12)
name2.push('dengnwenj')