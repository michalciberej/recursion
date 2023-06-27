function fibsRec(n, arr=[0, 1]) {
  if (n <= 2) return arr
  arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  return fibsRec(n - 1, arr)
}

console.log(fibsRec(8));