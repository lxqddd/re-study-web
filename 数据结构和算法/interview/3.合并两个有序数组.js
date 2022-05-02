const arr1 = [1, 2, 6, 0, 0, 0]
const m = 3
const arr2 = [2, 5, 6, 7, 8 ]
const n = 5

function merge(arr1, m, arr2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while(i >= 0 && j >= 0) {
    if (arr1[i] >= arr2[j]) {
      arr1[k] = arr1[i]
      arr1[i] = arr2[j]
      
    } else {
      arr1[k] = arr2[j]
    }
    j --
    k --
  }
  while (j >= 0) {
    arr1[k] = arr2[j]
    k --
    j --
  }
  return arr1
}

console.log(merge(arr1, m, arr2, n))



