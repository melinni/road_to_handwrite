function promiseAny(promises) {
  if (promises.length === 0) return Promise.reject(new Error())

  return new Promise((resolve, reject) => {
    let arr = [], num = 0
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        res => {
          resolve(res)
        },
        err => {
          num++
          arr[index] = err
          if (num === promises.length) {
            reject(err)
          }
        }
      )
    })
  })
}
