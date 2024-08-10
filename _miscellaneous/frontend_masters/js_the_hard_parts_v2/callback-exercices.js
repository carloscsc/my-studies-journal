// list: http://csbin.io/callbacks
// Answers: https://github.com/FrontendMasters/fm-snippets/blob/main/javascript-hard-parts-v2/callbacks.js#L80

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

/** Challenge 1 */ 
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

/** Challenge 2 */
function addS(word) {
  return word + 2;
}

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

/** Challenge 3 */
function map(array, callback) {
  const output = [];

  for (let key in array) {
    output.push(callback(array[key]));
  }

  return output;
}

console.log(map([1, 2, 3], addTwo));

/** Challenge 4 */
function forEach(array, callback) {
  for (key in array) {
    callback(array[key]);
  }
}

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet);

// see for yourself if your forEach works!

/** Challenge 5 */
function mapWith(array, callback) {
  const output = [];
  forEach(array, function (value) {
    output.push(callback(value));
  });
  return output;
}
console.log(mapWith([1, 2, 3], (n) => n + 1));

/** Challenge 6 */
function reduce(array, callback, initialValue) {
  let acc = initialValue; //?

  for (key in array) {
    acc = callback(acc, array[key]); //?
  }

  return acc;
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
reduce(nums, add, 0); //?
//-> 8

/** Challenge 7 */
function intersection(arrays) {
  return reduce(
    arrays,
    function (acc, current) {
      const output = [];

      for (let key in current) {
        if (acc.includes(current[key])) {
          output.push(current[key]);
        }
      }

      return output; //?
      // return current.filter((el) => acc.includes(el));
    },
    arrays[0]
  );
}

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
); //?
// should log: [5, 15]

/** Challenge 8 */
function union(arrays) {
  return reduce(
    arrays,
    (acc, current) => {
      const output = [...acc];

      for (let i in current) {
        if (!output.includes(current[i])) {
          output.push(current[i]);
        }
      }

      return output;
    },
    arrays[0]
  );
}

console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);
// should log: [5, 10, 15, 88, 1, 7, 100]

/** Challenge 9 */
function objOfMatches(array1, array2, callback) {
  const obj = {};
  console.log(array1);
  console.log(array2);

  array1.map((item, i) => {
    if (callback(item) === array2[i]) {
      Object.assign(obj, { [item]: array2[i] });
    }
  });

  return obj;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

/** Challenge 10 */
function multiMap(arrVals, arrCallbacks) {
  let output = {};

  for (let i in arrVals) {
    output[arrVals[i]] = [];

    for (let cb of arrCallbacks) {
      output[arrVals[i]].push(cb(arrVals[i]));
    }
  }

  return output;
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/** Challenge 11 */
function objectFilter(obj, callback) {
  const output = {};

  for (let key in obj) {
    key; //
    const finder = obj[key]; //?
    const result = callback(finder); //?

    if(finder == result) {
      output[key] = result
    }
    
  }

  return output;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));
// Should log { London: 'LONDON', Paris: 'PARIS'}

/** Challenge 12 */
function majority(array, callback) {
    let countTrue = 0
    let countFalse = 0

    for(let i = 0; i < array.length; i++) {
      callback(array[i]) ? countTrue++ : countFalse++
    }

    return countTrue > countFalse
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false



/** Challenge 13 */ 
function prioritize(array, callback) {
  const arrTrue = []
  const arrFalse = []

  for(let i = 0; i < array.length; i++) {
    const value = array[i];

    if(callback(value)) {
      arrTrue.push(value) 
    } else {
      arrFalse.push(value)
    }    
  }
  
  return [...arrTrue, ...arrFalse];
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); 
// should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

/** Challenge 14 */
function countBy(array, callback) {
  const output = {};

  for (let key in array) {
    const func = callback(array[key]);

    if (func in output) {
      ++output[func];
    } else {
      output[func] = 1;
    }
  }

  return output;
}

// /*** Uncomment these to check your work! ***/
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); //?
// should log: { odd: 3, even: 2 }

/** Challenge 15 */
function groupBy(array, callback) {
  const output = {};

  for (let i = 0; i < array.length; i++) {
    const key = callback(array[i]); //?

    if (key in output) {
      output[key].push(array[i]);
    } else {
      output[key] = [array[i]];
    }
  }

  output; //?

  return output;
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); //?
// should log: { 1: [1.3], 2: [2.1, 2.4] }

/** Challenge 16 */
function goodKeys(obj, callback) {
  const output = [];

  for (key in obj) {
    if (callback(obj[key])) {
      output.push(key);
    }
  }

  return output;
}

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird)); //?
// should log: ['charlie', 'dee']

/** Challenge 17 */
function commutative(func1, func2, value) {
  return func2(func1(value)) === func1(func2(value))
}

// /*** Uncomment these to check your work! ***/
const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

/** Challenge 18 */
function objFilter(obj, callback) {
  const output = {}

  for(let key in obj) {
    callback(key) //?
    obj[key] //?

    if(obj[key] === callback(key)) {
      output[key] = obj[key]
    }
      
  }

  return output;
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); 
// should log: { 2: 1, 6: 3 }

/** Challenge 19 */
function rating(arrOfFuncs, value) {
  let count = 0

  for(let i = 0; i<arrOfFuncs.length; i++) {
    arrOfFuncs[i](value) && count++ 
  }

  return count / arrOfFuncs.length * 100 
}

// /*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); 
// should log: 100
console.log(rating(checks, 66)); 
// should log: 75

/** Challenge 20 */
function pipe(arrOfFuncs, value) {
  let last = value;

  for(let i = 0; i < arrOfFuncs.length; i++) {
      last = arrOfFuncs[i](last)
  }

  return last;
}

/*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

/** Challenge 21 */
function highestFunc(objOfFuncs, subject) {
  let highest = ""
  let result = 0;

  for(let key of Object.keys(objOfFuncs)) {
      const exc = objOfFuncs[key](subject);

      if(exc > result) {
          result = exc
          highest = key 
      }

  }

  return highest
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

/** Challenge 22 */
function combineOperations(startVal, arrOfFuncs) {
    return pipe(arrOfFuncs, startVal)
}

function addTen(num) {
  return num + 10;
}
function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

// /*** Uncomment these to check your work! ***/
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

/** Challenge 23 */
function myFunc(array, callback) {
  let output = -1;

  for(let i = 0; i < array.length; i++) {
    callback(array[i]) && (output = i); 
  }

  return output; 
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
console.log(myFunc(numbers, isOdd));
// Output should be 1
console.log(myFunc(evens, isOdd)); 
// Output should be -1

/** Challenge 24 */
function myForEach(array, callback) {
  for(let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}



function addToSum(num) {
  sum += num; //?
}

// /*** Uncomment these to check your work! ***/
const nums2 = [1, 2, 3];
myForEach(nums2, addToSum);
console.log(sum); 
// Should output 6
