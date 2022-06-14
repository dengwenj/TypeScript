# TypeScript

### keyof

* TypeScript允许我们遍历某种类型的属性，并通过keyof操作符提取其属性的名称。

* keyof操作符可以用于获取某种类型的所有键，其返回类型是联合类型。

```TS
interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string | number

上述例子中，K3返回的是string | number是因为，在js中，对象的key，obj[1] == obj["1"]。
```

```TS
type AA = keyof any // string | number | symbol
```

**Record:**

```TS
type roles = 'tester' | 'developer' | 'manager'
const staffCount: Record<roles, number> = {
  tester: 10,
  developer: 20,
  manager: 1
}
```

## 步骤一：全局安装 typescript

```
npm ``install` `-g typescript　　
```

　　

## 步骤二：全局安装 ts-node

　　安装它的原因是typescript自带的tsc命令并不能直接运行typescript代码。但值得注意的是 ts-node 并不等于 typescript 的 Node.js ，仅仅封装了 typescript 的编译过程，提供直接运行typescript代码的能力。

```
npm ``install` `-g ts-node
```


