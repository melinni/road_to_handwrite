/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate) {
      // 如果当前没有timeout的话，就表示可以call，否则就不做
      var callNow = !timer;
      // 过wait秒后，再将timeout设为null，防止快速点击
      timer = setTimeout(() => {
        timer = null;
      }, wait)
      if (callNow) func.apply(this, arguments)
    } else {
      timer = setTimeout(function(){
        func.apply(this, arguments)
      }, wait);
    }
  }
}
