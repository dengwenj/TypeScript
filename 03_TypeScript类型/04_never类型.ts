// never 不能是任何值

let msg = 'dengwenj'

// const d: never = msg // d 是没有值的, msg 不能赋值给 d



function handleMsg(message: number | string | boolean) {
  switch (typeof message) {
    case 'string':
      console.log('string');
      break;
    case 'number':
      console.log('number');
      break
    default:
      const notData: never = message // notData 是没有值的，必须要写 boolean 的 case
  }
}

