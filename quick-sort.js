function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr[pivotIndex];
  let less = []
  let greater = []
  
  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIndex) {
      arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort([10, 9, 8, 7, 6]))
console.log(quickSort([4, 1, 9, 0]))
console.log(quickSort([2, 1]))