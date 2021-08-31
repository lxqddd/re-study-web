// 写一个mySetInterval(fn, a, b), 每次间隔a, a+b, a+2b ...的时间，然后写一个myClear，停止上边的mySetInterval

function mySetInterval(fn, a, b) {
  let time = 0

  interval = null

  const handleFn = () => {
    clearTimeout(interval)
    interval = setTimeout(() => {
      time += 1
      fn()
      handleFn()
    }, a + time * b)
  }

  handleFn()
  console.log(interval)
  return interval
}

function myClear(interval) {
  console.log(interval)
  clearTimeout(interval)
  console.log('结束了')
}

let timer = 0

const test = mySetInterval(
  () => {
    timer++
    console.log('hello world')
    if (timer === 5) {
      myClear(test)
    }
  },
  300,
  500
)
