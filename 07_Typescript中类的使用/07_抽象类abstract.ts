function mackArea(shape: Shape) {
  return shape.getArea()
}

// 抽象方法只能出现在抽象类中
// 抽象方法是可以没有函数体的
// 抽象类是不能被实例化的
// 抽象类的抽象方法必须被子类实现
abstract class Shape {
  abstract getArea(): number
}

class JX extends Shape {
  private witch: number
  private height: number

  constructor(witch: number, height: number) {
    super()
    this.witch = witch
    this.height = height
  }

  getArea() {
    return this.witch * this.height
  }
}

class RX extends Shape {
  private r: number
  
  constructor(r: number) {
    super()
    this.r = r
  } 

  getArea() {
    return this.r * this.r * 3.14
  }
}

console.log(mackArea(new JX(10, 20)))
console.log(mackArea(new RX(10)))

