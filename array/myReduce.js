// reduce实现

Array.prototype.myReduce = function (fn, initialValue) {
  let arr = this
  let total = initialValue || arr[0]
  for (let i = initialValue ? 0 : 1, len = arr.length; i < len; i++) {
    total = fn(total, arr[i], i, arr)
  }
  return total
}
