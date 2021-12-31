function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentMin = arr[i];
    let currentMinIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < currentMin) {
        currentMin = arr[j];
        currentMinIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = currentMin;
    arr[currentMinIndex] = temp;
  }
  return arr;
}

module.exports = selectionSort;
