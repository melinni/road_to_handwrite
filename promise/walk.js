// 异步函数同步化
function walk(fn, wait, time) {
  return async function(...args) {
    for (let i = 0; i < time; i++) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(fn.apply(this, args))
        }, wait)
      }) 
    }
  }
}

const func = walk(console.log, 1000, 4)
func('嘿嘿嘿')