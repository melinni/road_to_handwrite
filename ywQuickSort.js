function sort(start, end, arr) {
  let pivot = arr[start]
  let left = start, right = end
  while (right > left) {
    while (arr[right] > pivot && right > left) {
      right--
    }
    arr[left] = arr[right]

    while (arr[left] < pivot && right > left) {
      left++
    }
    arr[right] = arr[left]
  }

  arr[left] = pivot

  return left
}

function ywQuickSort(nums) {
  quickSort(0, nums.length - 1, nums)

  return nums
}

function quickSort(start, end, nums) {
  console.log("start:", start, "end:", end)
  if (end > start) {
    let mid = sort(start, end, nums)
    console.log("mid:", mid)
    quickSort(start, mid - 1, nums)
    quickSort(mid + 1, end, nums)
  }
}

console.log(ywQuickSort([5,3,7,9,2,1,10]))