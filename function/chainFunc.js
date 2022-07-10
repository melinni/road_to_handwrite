// 技巧一
function Class1() {
  console.log('初始化')
}
Class1.prototype.method = function(param) {
  console.log(param)
  return this
}
let cl = new Class1()
//由于new 在实例化的时候this会指向创建的对象， 所以this.method这个方法会在原型链中找到。
cl.method('第一次调用').method('第二次链式调用').method('第三次链式调用')
