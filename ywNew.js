function ywNew(context) {
  let obj = new Object()
  obj.__proto__ = context.prototype
  const res = context.apply(obj, [...arguments].slice(1))
  return typeof res === "object" ? res : obj
}