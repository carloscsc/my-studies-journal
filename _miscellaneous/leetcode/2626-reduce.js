// LeetCode: 2626. Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  !nums.length ?? init;

  let accum = init;

  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }

  return accum;
};

/** LOGS */

// Case 01 - expect 10
console.log(reduce([1, 2, 3, 4], (accum, curr) => accum + curr, 0));

// Case 02 - expect 130
console.log(reduce([1, 2, 3, 4], (accum, curr) => accum + curr * curr, 100));

// Case 03 - expect 25
console.log(reduce([], (accum, curr) => 0, 25));
