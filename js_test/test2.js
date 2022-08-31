// 要去浏览器里看答案！
var num = 10
let obj = { num: 20 }
obj.fn = (function(num) {
  this.num = num * 3
  num++
  return function(n) {
    this.num += n
    num++
    console.log(num)
  }
})(obj.num)

let fn = obj.fn
fn(5)
obj.fn(10)
console.log(num, obj.num)