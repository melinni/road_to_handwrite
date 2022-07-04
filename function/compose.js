const add1 = x => x + 1
const mul2 = x => x * 4
const div2 = x => x / 2

function ywCompose(...funcs) {
  if (funcs.length === 0) return args => args
  if (funcs.length === 1) return funcs[0]
//   return funcs.reduce((a, b) => (...args) => a(b(...args)))
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

console.log(ywCompose(div2, mul2, add1)(5))