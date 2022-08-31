/**
* 快速排序
* @param {array}    - arr 需要排序的数组
* @returns {array}
*/
function quickSort (arr) {
  if (arr.length <= 1) return arr
  var arr1 = [], arr2 = []
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr1.push(arr[i])
    } else {
      arr2.push(arr[i])
    }
  }
  arr1 = quickSort(arr1)
  arr2 = quickSort(arr2)
  arr1.push(arr[0])
  return arr1.concat(arr2)
}

var arr = [9, 4, 3, 1, 6, 3, 8, 7, 13, 0, 5, 2, 3]
console.log(quickSort(arr))    // [1, 3, 3, 4, 6, 7, 8, 9]

