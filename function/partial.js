// 偏函数

// 技巧一
function partial(fn, ...args) {
  return (...arg) => {
      return fn(...args, ...arg)
  }
}