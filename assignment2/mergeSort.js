function mergeSort(arr) {
  if (arr.length > 1) {
    newArr = arr.splice(0, arr.length / 2)
    console.log(newArr, arr)
    mergeSort(newArr)
    mergeSort(arr)
    merge(newArr, arr)
  }

}

function merge(arrOne, arrTwo) {
  let arrThree = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arrOne.length && j < arrTwo.length){
    if (arrOne[i] < arrTwo[j])
      arrThree[k++] = arrOne[i++]
    else
      arrThree[k++] = arrTwo[j++]
  }
  for (; i < arrOne.length; i++) {
    arrThree[k++] = arrOne[i]
  }
  for (; j < arrTwo.length; j++) {
    arrThree[k++] = arrTwo[j]
  }
  return arrThree
}

console.log(mergeSort([1,7,4,6,13,9,3,2]))