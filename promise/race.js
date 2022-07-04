function promiseRace(promises) {
  if (promises.length === 0) return Promise.resolve()

  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(
        res => resolve(res),
        err => reject(err)
      )
    })
  })
}
