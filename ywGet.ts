function ywGet(object: Object, path: Array<String> | String, defaultValue?: any) {
  let newPath: Array<String> = []

  if (Array.isArray(path)) {
    newPath = path
  } else {
    newPath = path.replace(/\[/, ',').replace(/\]/, '').split('.')
  }

  console.log("new path", newPath)

  return newPath.reduce((previous:any, currentValue:any) => (previous || {})[currentValue], object) || defaultValue
}

let obj:Object = {
  a: 1,
  b: "2",
  c: {
    d: 3
  }
}

console.log(ywGet(obj, 'c.d'))