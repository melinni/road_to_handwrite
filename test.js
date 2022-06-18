function debounce(func, wait, immediate) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)

    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) func.apply(this, args)
    } else {
      timer = setTimeout(() => {
        func.apply(this, args)
      }, wait)
    }
  }
}

function throttle(func, wait) {
  let prev = 0
  return function (...args) {
    let now = Date.now()
    if (now - prev > wait) {
      func.apply(this, args)
      prev = now
    }
  }
}

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
