function makeRepeat(fn, times, waits) {
  let num = 0;
  let timer = ""
  return function() {
    let context = this
    let args = arguments
    timer = setInterval(() => {
      if (num < times) {
        num++
        fn.call(context, args)
      } else {
        clearInterval(timer)
      }
    }, waits)
  }
}

var repeat = makeRepeat(console.log, 4, 3000)
repeat("hello world")