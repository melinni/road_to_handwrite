// apply方法

Function.prototype.myApply=function(context, ...args){
  // 获取调用`myApply`的函数本身，用 this 获取，如果 context 不存在，则为 window
  var context = context || window;
  var fn = Symbol();
  context[fn] = this;
  context[fn](...args);
  // 从上下文中删除函数引用
  delete context.fn;
}

let obj = {
  name: "123",
  age: 26
}

function a() {
  console.log("333", this.name);
}

a.myApply(obj);