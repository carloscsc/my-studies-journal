// https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    cache[key] = fn(...args);

    return cache[key];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); //?
memoizedFn(2, 3); //?
memoizedFn(3, 2); //?
memoizedFn(2, 3); //?
console.log(callCount); // 1

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); //?
memoFactorial(3); //?
memoFactorial(2); //?
memoFactorial(2); //?
