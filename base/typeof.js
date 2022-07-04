/**
 * 优点：能够快速区分基本数据类型
 * 缺点：不能将Object、Array和Null区分，都返回object
 */

let a = "123"
console.log(a, typeof a) // string

let b = new String("123")
console.log(b, typeof b) // object

let c = 123
console.log(c, typeof c) // number

let d = true
console.log(d, typeof d) // boolean

let e = []
console.log(e, typeof e) // object

let f = {}
console.log(f, typeof f) // object

let g = null
console.log(g, typeof g) // object

let h = undefined
console.log(h, typeof h) // undefined

let i = NaN
console.log(i, typeof i) // number

let j = new Number(123)
console.log(j, typeof j) // object

let k = function(){}
console.log(k, typeof k) // function

let l = Symbol
console.log(l, typeof l) // function

let m = Symbol(1)
console.log(m, typeof m) // symbol
