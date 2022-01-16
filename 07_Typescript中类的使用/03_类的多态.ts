class Animal {
  action() {
    console.log('action1')
  }
}

class Dog extends Animal {
  action() {
    console.log('action2')
  }
}

class Cat extends Animal {
  action() {
    console.log('action3')
  }
}

// 多态的目的是为了写出更加具备通用性的代码
function actions(animal: Animal[]) {
  animal.forEach(item => {
    item.action()
  })
}

actions([new Dog(), new Cat()])