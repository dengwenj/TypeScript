// 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型 enum
// 枚举允许我们定义一组命名常量，常量可以是数字，字符串类型

enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BUTTOM
}

function type(d: Direction) {
  switch (d) {
    case Direction.LEFT:
      console.log('左');
      break;
  
    default:
      break;
  }
}

type(Direction.LEFT) // 0  默认
type(Direction.RIGHT) // 1
type(Direction.TOP) // 2
type(Direction.BUTTOM) // 4