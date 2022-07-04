let a = 1
let b = new Number(1)
let c = 1
let d = '1'
let e = {}
let f = {}
let g = undefined

console.log(a == b) // true
console.log(a == c) // true
console.log(a === b) // false
console.log(a === c) // true
console.log(a == d) // true
console.log(a === d) // false

console.log(null == null) // true
console.log(null === null) // true

console.log(undefined == undefined) // true
console.log(undefined === undefined) // true

console.log(NaN === NaN) // false
console.log(NaN === NaN) // false

console.log(e == f) // false
console.log(e === f) // false
