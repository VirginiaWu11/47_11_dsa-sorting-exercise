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

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIndex));
  const right = mergeSort(arr.slice(midIndex));
  console.log(merge(left, right));
  return merge(left, right);
}

module.exports = { merge, mergeSort };

//  0   1  2   3   4   5  6  7
// [4, 20, 12, *10, 7, 9, 1]

// mid = 3
// left <                          right <
// 4, 20, 12                   10, 7, 9, 1
// L     R               L                 R
// 4    20, 12        10, 7               9, 1
//     L   R          L   R               L   R
//     20  12        10    7              9   1
//     [12,20]        [7,10]           [1,9]
// [4,12,20]<                  [1,7,9,10]<
//             [1,4,7,9,10,12,20] DONE
