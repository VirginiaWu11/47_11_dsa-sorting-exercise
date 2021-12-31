function merge(arr1, arr2) {
  let leftP = 0;
  let rightP = 0;
  let mergedArr = [];
  while (leftP < arr1.length && rightP < arr2.length) {
    if (arr1[leftP] <= arr2[rightP]) {
      mergedArr.push(arr1[leftP]);
      leftP++;
    } else {
      mergedArr.push(arr2[rightP]);
      rightP++;
    }
  }
  while (leftP < arr1.length) {
    mergedArr.push(arr1[leftP]);
    leftP++;
  }
  while (rightP < arr2.length) {
    mergedArr.push(arr2[rightP]);
    rightP++;
  }
  return mergedArr;
}

function mergeSort() {}

module.exports = { merge, mergeSort };
