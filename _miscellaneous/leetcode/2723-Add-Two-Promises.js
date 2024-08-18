/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
// var addTwoPromises = async function(promise1, promise2) {
//     return Promise.all([promise1, promise2])
//       .then(arr => {
        
//         const result = arr.reduce((acc, crr) => {
//           return acc + crr
//         }, 0)
        
//         return result
//     })
// };

// Other option accept more arguments
var sumPromises = async function(promise1, promise2, ...args) {
  const promises = [...arguments]
  let result = 0;

  for(let res of promises) {
      result += await res;
  }

  return Promise.resolve(result) 
};

sumPromises(Promise.resolve(2), Promise.resolve(2), Promise.resolve(2), Promise.resolve(2), Promise.resolve(2))
  .then(ress => {
    console.log(ress)
  }); 
// 4
