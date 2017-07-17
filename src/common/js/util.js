export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }

  // arr.sort(() => {
  //   return Math.random() - 0.5
  // })
  return _arr
}
function getRandomInt(min, max) {
  return (Math.random() * (max - min + 1) + min) | 0
}

export function debounce(func, delay) {
  let timer
  return function (args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func(args)
    }, delay)
  }
}
