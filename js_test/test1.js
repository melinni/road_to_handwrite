// 要去浏览器里看答案！
function a(item) {
  item.name = 'zs'
  item.age++
  item.num.push('111')
  item.num = ['222', '333']
  item = {
    name: 'ls',
    age: 20,
    num: ['222', '333', '111']
  }
  return item.num
}

let num = ['444']
let item = {
  name: 'ww',
  num: num
}
let newNum = a(item)
newNum.push('555')
console.log(newNum)
console.log(item)
console.log(num)