{
  // Return the promise that resolves first 
  const promises = [
    new Promise((resolve, reject) =>
      setTimeout(() => resolve('result'), 100)), // (A)
    new Promise((resolve, reject) =>
      setTimeout(() => resolve('result 2'), 50)), // (A)
    new Promise((resolve, reject) =>
      setTimeout(() => reject('ERROR'), 200)), // (B)
  ];
  Promise.race(promises)
    .then((result) => {
      console.log(result)
    });
}
{
  // the rejection happens first
  const promises = [
    new Promise((resolve, reject) =>
      setTimeout(() => resolve('result'), 200)),
    new Promise((resolve, reject) =>
      setTimeout(() => reject('ERROR'), 100)),
  ];
  Promise.race(promises)
    .then(
      (result) => {
        console.log(result)
      },
      (err) => {
        console.log(err)
      }
    )
}