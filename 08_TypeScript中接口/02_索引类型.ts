interface IIndex {
  [index: number]: string
}

const fe: IIndex = {
  0: 'html',
  1: 'css',
  2: 'js',
  3: 'react'
}
console.log(fe)

interface IStr {
  [name: string]: number,
  react: number
}

const s: IStr = {
  java: 1995,
  js: 1996,
  c: 1972,
  react: 11111
}
console.log(s);
