function _new(con, ...args) {
  let obj = new Object()
  obj.__proto__ = con.prototype
  let res = con.apply(obj, args)
  return typeof res === "object" ? res : obj
}