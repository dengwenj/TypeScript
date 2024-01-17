// 类装饰器
// 属性装饰器
// 方法装饰器
// 参数装饰器
// 参数装饰器优先方法装饰器执行

const DC: ClassDecorator = (target: Function) => {
  console.log(target);
}

const DC2 = (p: string): ClassDecorator => {
  return (target: Function) => {
    console.log(p, target) 
  }
}

const Post = (url: string): MethodDecorator => {
  return (target: Object, name: string | symbol, desc: PropertyDescriptor) => {
    console.log(url)
    console.log(target, name, desc)
  }
}
const Sts = (): MethodDecorator => {
  return (target: any, name: string | symbol, desc: PropertyDescriptor) => {
    // target 构造函数
    console.log(target.prototype.hh = 'nihao qkqkqk', name, 11)
  }
}

const Age = (): PropertyDecorator => {
  return (target: Object, propertyKey: string | symbol) => {
    console.log(target, propertyKey)
  }
}

const Sex = (): ParameterDecorator => {
  return (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => {
  }
}

// @DC
// @DC2('装饰器工厂')
class Demo19 {
  @Age()
  age: number
  constructor() {
    this.age = 24
  }

  @Post('/api/demo')
  test(@Sex() sex: string) {}

  @Sts()
  static testS() {}
}
const d19 = new Demo19() as any
console.log(d19.hh)
