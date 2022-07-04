function delay(time) {
  return new Promise((resolve, reject) => {
    console.log(`wait ${time}s`)
    setTimeout(() => {
      console.log('execute');
      resolve()
    }, time * 1000)
  })
}

const arr = [3, 4, 5];

// 技巧一
arr.reduce((s, v) => {
  return s.then(() => delay(v))
}, Promise.resolve())

// 技巧二
(
  async function () {
    for (const v of arr) {
      await delay(v)
    }
  }
)()

// 技巧三
let p = Promise.resolve()
for (const i of arr) {
  p = p.then(() => delay(i))
}