const myArr = [1, 2, 3, 4, 5];

myArr.forEach((item) => console.log(item));

console.log('---');

const newArray = myArr.map((item) => item * 2);
newArray.forEach((item) => console.log(item));
