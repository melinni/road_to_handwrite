// call方法

Function.prototype.myCall = function(context, ...args) {
  // 获取参数
  let result = null;
  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;
  var fn = Symbol();
  // 将调用函数设为对象的方法
  context[fn] = this;
  // 调用函数
  result = context[fn](...args);
  // 将属性删除
  delete context[fn];
  return result;
};

let obj = {
  name: "123",
  age: 26
}

function a() {
  console.log("333", this.name);
}

a.myCall(obj);
