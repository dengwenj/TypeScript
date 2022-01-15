function useState(state: any) {
  let current = state

  const changeState = (newState: any) => {
    newState = current
  }

   const tuple: [any, (newState: any) => void]  = [current, changeState]
   return tuple
}

const [count, setCount] = useState(1) 
const [string, setString] = useState('dwj')


// 范型
// function useState<T>(state: T) {
//   let current = state

//   const changeState = (newState: T) => {
//     newState = current
//   }

//    const tuple: [T, (newState: T) => void]  = [current, changeState]
//    return tuple
// }

// const [count, setCount] = useState(1) 
// const [string, setString] = useState('dwj')