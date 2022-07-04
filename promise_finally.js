// 技巧一
Promise.prototype.finally = function(cb) {
  return this.then(
    value => {
      return Promise.resolve(cb()).then(function(){ return value })
    },
    err => {
      return Promise.resolve(cb()).then(function(){ throw err })
    }
  )
}
