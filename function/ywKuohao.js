function ywKuohao(str) {
  let map = {
    '[': ']',
    '{': '}',
    '(': ')'
  }

  let arr = []
  for (let s of str) {
    console.log('s', s)
    if (Object.keys(map).includes(s)) {
      arr.push(s)
    } else {
      if (map[arr[arr.length - 1]] === s) {
        arr.pop()
      } else {
        return false
      }
    }
  }

  return arr.length === 0
}

console.log(ywKuohao('{[]}'))