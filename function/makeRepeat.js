function makeRepeat(fn, times, waits) {
  let num = 0;
  let timer = ""
  return function(...args) {
    let context = this
    timer = setInterval(() => {
      if (num < times) {
        num++
        fn.apply(context, args)
      } else {
        clearInterval(timer)
      }
    }, waits)
  }
}

var repeat = makeRepeat(console.log, 4, 3000)
repeat("hello world")