// O(n^2)
function bubbleSortWithForLoops(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    arr.forEach((item, i ) => {
      if (item > arr[i + 1]) {
        let temp = item
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    })
  } while (swapped)

  return arr
}

// console.log(bubbleSortWithForLoops([5, 4, 3, 2, 1]))
console.log(bubbleSort([10, 9, 8, 7, 6]))
console.log(bubbleSort([4, 1, 9, 0]))
