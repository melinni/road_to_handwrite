// promise手写实现

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function Promise(executor) {
  var _this = this
  this.state = PENDING; //状态
  this.value = undefined; //成功结果
  this.reason = undefined; //失败原因

  this.onFulfilled = [];//成功的回调
  this.onRejected = []; //失败的回调
  function resolve(value) {
    if(_this.state === PENDING){
      _this.state = FULFILLED
      _this.value = value
      _this.onFulfilled.forEach(fn => fn(value))
    }
  }
  function reject(reason) {
    if(_this.state === PENDING){
      _this.state = REJECTED
      _this.reason = reason
      _this.onRejected.forEach(fn => fn(reason))
    }
  }
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
  var _this = this;
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

  var promise2 = new Promise((resolve, reject)=>{
    if(_this.state === FULFILLED){
      setTimeout(()=>{
        try {
          let x = onFulfilled(_this.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    } else if(_this.state === REJECTED){
      setTimeout(()=>{
        try {                    
          let x = onRejected(_this.reason)
          resolvePromise(promise2, x ,resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    } else if(_this.state === PENDING){
      _this.onFulfilled.push(()=>{
        setTimeout(()=>{
          try {                        
            let x = onFulfilled(_this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      })
      _this.onRejected.push(()=>{
        setTimeout(()=>{
          try {                        
            let x = onRejected(_this.reason)
            resolvePromise(promise2, x ,resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      })
    }
  })

  function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        reject(new TypeError('Chaining cycle'));
    }
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      let used;
      try {
        let then = x.then
        if(typeof then === 'function'){
          then.call(x, (y)=>{
            if (used) return;
            used = true
            resolvePromise(promise2, y, resolve, reject)
          }, (r) =>{
            if (used) return;
            used = true
            reject(r)
          })
        } else {
          if (used) return;
          used = true
          resolve(x)
        }
      } catch(e){
        if (used) return;
        used = true
        reject(e)
      }
    } else {
      //普通值
      resolve(x)
    }
  }
};


