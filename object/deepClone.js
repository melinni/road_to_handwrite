// 技巧一
function deepClone(obj = {}, map = new WeakMap()) {
  // 处理 null
  if (obj === null) return obj

  // 处理正则
  if (obj instanceof RegExp) return new RegExp(obj)

  // 处理日期
  if (obj instanceof Date) return new Date(obj)

  // 处理 Symbol
  if (typeof obj === 'symbol') return Symbol(obj)

  // 处理原始类型
  if (typeof obj !== 'object') return obj

  if (map.get(obj)) {
    return map.get(obj);
  }

  let result = {};
  // 初始化返回结果
  if (Object.prototype.toString.call(obj) === "[object Array]") {
    result = []
  }

  // 防止循环引用
  map.set(obj, result)

  for (const key in obj) {
    // 保证 key 不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key], map);
    }
  }

  // 返回结果
  return result;
}
