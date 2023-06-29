function mergeSort(arr) {
  if (arr.length <= 1) return arr
  else {
    const num = (arr.length / 2)
    const leftArray = arr.slice(0, num)
    const rightArray = arr.slice(num, arr.length)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
  }
}

function merge(leftArray, rightArray) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j])
      result.push(leftArray[i++])
    else
      result.push(rightArray[j++])
  }
  
  while (i < leftArray.length) result.push(leftArray[i++])
  
  while (j < rightArray.length) result.push(rightArray[j++])
  
  return result
}

const array = [1, 7, 4, 6, 13, 9, 3, 55, 22, 55, 9, 21, 4, 3, 99]

console.log(array)
console.log(mergeSort(array))