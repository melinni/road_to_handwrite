function promiseAllSettle(promises) {
  if (promises.length === 0) return Promise.resolve([])

  return new Promise((resolve, reject) => {
    let result = [], num = 0
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        res => {
          num++
          result[index] = { status: "fulfilled", value: res }
          if (num === promises.length) {
            resolve(result)
          }
        },
        err => {
          num++
          result[index] = { status: "rejected", reason: err }
          if (num === promises.length) {
            resolve(result)
          }
        },
      )
    })
  })
}
