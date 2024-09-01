// Example with setTimeout and setInterval

let num = 0;
const logId = setInterval(() => {
  console.log(++num); // log 1-10
}, 100);

setTimeout(() => {
  clearInterval(logId);
}, 1100);

console.log('start');
setTimeout(() => {
  console.log('callback');
}, 0); // will rum only when the queue is empty even if the timeout is 0ms
console.log('end');
