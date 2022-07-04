var a = 0

function f() {
  var b = 1
}

function ff() {
  console.log('a', a, global)
  // console.log('b', b)  // ReferenceError: b is not defined
}

// console.log('bb', b)  // ReferenceError: b is not defined

ff()