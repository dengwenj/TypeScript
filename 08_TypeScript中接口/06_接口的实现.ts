// 接口定义后也是可以被类实现的
// 如果被一个类实现，那么在之后需要传入接口的地方，都可以将这个类传入，这就是面向接口开发

interface ISwim {
  swimming: () => void
}

interface IRun {
  running: () => void
}

// 一个类可以实现多个接口
class Person implements ISwim, IRun {
  swimming() {
    console.log('swimming');
  }

  running() {
    console.log('running')
  }
}

function swim(s: ISwim) {
  s.swimming()
}

swim(new Person()) // 将这个类传入
swim({ swimming() {} })