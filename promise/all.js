function promiseAll(promises) {
  if (promises.length === 0) return Promise.resolve([])

  return new Promise((resolve, reject) => {
    let arr = [], num = 0
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        res => {
          num++
          arr[index] = res
          if (num === promises.length) {
            resolve(arr)
          }
        },
        err => {
          reject(err)
        }
      )
    })
  })
}
