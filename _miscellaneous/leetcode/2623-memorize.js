// https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};

  return function (...args) {
    const func = JSON.stringify(fn.toString() + args);
    const arguments = args.toString(); //?

    if (cache[func] && cache[func].arguments === arguments) {
      return cache[func].res;
    }

    const res = fn(...args);
    cache[func] = { arguments, res };

    return res;
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
