const FULFILLED = "fulfilled"
const REJECTED = "rejected"
const PENDING= "pending"

class ywPromise1 {

  constructor(executor) {
    this.status = PENDING
    this.value = ""
    this.reason = ""
    this.fullfilledCallback = []
    this.rejectedCallback = []

    const resolve = value => {
      if (this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        this.fullfilledCallback.forEach(fn => fn())
      }
    }

    const reject = reason => {
      if (this.status === PENDING) {
        this.reason = reason
        this.fullfilledCallback.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          onFulfilled(this.value)
        }, 0)
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          onRejected(this.reason)
        }, 0)
      }
      if (this.status === PENDING) {
        this.fullfilledCallback.push(() => {
          onFulfilled(this.value)
        })
        this.rejectedCallback.push(() => {
          onRejected(this.reason)
        })
      }
    })

    return promise2
  }
}