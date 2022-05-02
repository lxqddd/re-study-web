const nums = [2, 7, 11, 15, 2, -2]
const target = 9

// 方法一
function twoSum (nums, target) {
  let len = nums.length
  const ret = []
  const retIndex = []
  for(let i = 0; i < len; i ++) {
    for(let j = 1; j < len - i; j ++) {
      if (nums[i] + nums[j] === target) {
        ret.push([nums[i], nums[j]])
        retIndex.push([i, j])
      }
    }
  }
  return retIndex
}
console.log(twoSum(nums, target))
