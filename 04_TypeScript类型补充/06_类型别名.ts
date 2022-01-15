type ID = string | number | boolean
type porint = {
  x: number,
  y: number,
  z?: number
}

function id(id?: ID) {}
function foo(porint: porint) {
  console.log(porint);
}