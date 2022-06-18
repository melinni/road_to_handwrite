function quickSort(nums) {
  sort(0, nums.length - 1, nums)
}

function sort(start, end, nums) {
  if (end > start) {
    let mid = Math.floor(start + (end - start) / 2)
    sort1(start, mid, nums)
    sort1(mid + 1, end, nums)
  }
}

function sort1(start, end, nums) {
  let pivot = nums[start]
  let left = start, right = end
  while (right > left) {
    while (nums[right] > pivot && right > left) {
      right--
    }
    nums[left] = nums[right]
    while (nums[left] < pivot && right > left) {
      left++
    }
    nums[right] = nums[left]
  }

  nums[left] = pivot
}