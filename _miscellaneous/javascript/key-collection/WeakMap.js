// in WeakMap all the keys must be a object
// you can't iterate through a WeakMap

/**
 * Build a cache system
 */
const cache = new WeakMap();

async function expensiveOperation(obj) {
  if (cache.has(obj)) {
    console.log('returning from cache');
    return cache.get(obj);
  }

  const response = await fetch('https://fakestoreapi.com/products/1');
  const result = await response.json();

  cache.set(obj, result);
  return result;
}

const obj = {};

(async () => {
  const data = await expensiveOperation(obj);
  console.log(data);

  const cacheData = await cache.get(obj);

  const secondCall = await expensiveOperation(obj);
  const ThirdCall = await expensiveOperation(obj);

  console.log(cacheData);
  console.log(secondCall);
  console.log(ThirdCall);
})();
