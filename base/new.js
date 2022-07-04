function _new() {
  let obj = new Object()
  obj.__proto__ = _new.prototype
  let res = _new.apply(obj, [...arguments].slice(1))
  return typeof res === "object" ? res : obj
}