function add(...args) {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  let _args = args || [];
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  let _adder = function (...newArgs) {
    _args = _args.concat(newArgs); //_args = [..._args,...newArgs]
    return _adder;
  };
  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce((a, b) => a + b);
  };
  return _adder;
}

console.log(add(1)(2, 4)); // f 7
console.log(add(1)(2)(3)); // f 6
console.log(add(1, 2, 3)(4)); // f 10
console.log(add(1)(2)(3)(4)(5)); // f 15
console.log(add(2, 6)(1)); // f 9
console.log(typeof add(1)(2)); // function
console.log(add(1)(2).toString()); // 3 <number>
console.log(String(add(1)(2))); // 3 <string>
console.log(Number(add(1)(2))); // 3 <number>
console.log(add(1)(2) - 0); // 3 <number>
