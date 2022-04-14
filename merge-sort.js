function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const sorted = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    }
    else {
      sorted.push(right.shift())
    }
  }

  return [...sorted, ...left, ...right]
}

console.log(mergeSort([10, 9, 8, 7, 6]))
console.log(mergeSort([4, 1, 9, 0]))
console.log(mergeSort([2, 1]))