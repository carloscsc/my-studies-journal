// LeetCode: 2634. Filter Elements from Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i) && filteredArray.push(arr[i]);
  }

  return filteredArray;
};

/** LOGS */

// Case 01 - Expected: [20,30]
console.log(filter([0, 10, 20, 30], (n) => n > 10));

// Case 02 - Expected: [1]
console.log(filter([1, 2, 3], (n, i) => i === 0));

// Case 03 - Expected: [-2,0,1,2]
console.log(filter([-2, -1, 0, 1, 2], (n) => n + 1));
