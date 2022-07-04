function allSettled(promises) {
  if (promises.length === 0) return Promise.resolve()

  return new Promise((resolve, reject) => {
    let res = [], len = promises.length, count = 0
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(res => {
        res[i] = { status: 'fulfulled', value: res }
        count++
        if (count === len) resolve(res)
      }).catch(err => {
        res[i] = { status: 'rejected', reason: err }
        count++
        if (count === len) resolve(res)
      })
    })
  })
}