const arr1 = [-1, 0, 1, 2, -1, -4]

function threeSum (arr) {
  const ret = []
  for(let i = 0; i < arr.length; i ++) {
    for(let j = 1; j < arr.length - i - 1; j ++) {
      for(let k = 2; k < arr.length - i - 2; k ++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          ret.push([arr[i], arr[j], arr[k]])
        }
      }
    }
  }
  return ret
}

console.log(threeSum(arr1))


function threeSum2(arr) {
  let ret = []
  arr = arr.sort((a, b) => a - b)
  const len = arr.length

  for(let i = 0; i < len - 2; i ++) {
    let j = i + 1
    let k = len - 1

    // 遇到重复数字，跳过
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue
    }

    function moveJ() {
      j ++
      while(j < k && arr[j] === arr[j - 1]) {
        j ++
      }
    }

    function moveK () {
      k --
      while(j < k && arr[k] === arr[k + 1]) {
        k --
      }
    }

    while(j < k) {
      if (arr[i] + arr[j] + arr[k] < 0) {
        moveJ()
      } else if (arr[i] + arr[j] + arr[k] > 0) {
        moveK()
      } else {
        ret.push([arr[i], arr[j], arr[k]])
        moveJ()
        moveK()
      }
    }
  }
  return ret
}

console.log(threeSum2(arr1))