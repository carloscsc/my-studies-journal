// Exercises: http://csbin.io/closures
// Response: https://github.com/FrontendMasters/fm-snippets/blob/main/javascript-hard-parts-v2/closures.js

/** CHALLENGE 1 */
function createFunction() {
  return () => "hello"
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
console.log(function1()); 
// => should console.log('hello');


/** CHALLENGE 2 */
function createFunctionPrinter(input) {
  return () => input
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
console.log(printSample())
console.log(printSample())
console.log(printSample())
// => should console.log('sample');
const printHello = createFunctionPrinter('hello');
console.log(printHello())
console.log(printHello())
console.log(printHello())
// => should console.log('hello');


/** CHALLENGE 3 */
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    return counter
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
console.log(willCounter())
console.log(willCounter())
console.log(willCounter())
console.log(jasCounter())
console.log(willCounter())


function addByX(x) {
  let value = x;
  return function addValue(x) {
    value += x
   return value;
  }
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// console.log(addByTwo(1)) 
// => should return 3
// console.log(addByTwo(2)) 
// => should return 4
// console.log(addByTwo(3)) 
// => should return 5

const addByThree = addByX(3);
// console.log(addByThree(1)) 
// => should return 4
console.log(addByThree(2)) 
// => should return 5

const addByFour = addByX(4);
// console.log(addByFour(4)) 
// => should return 8
console.log(addByFour(5)) 
// => should return 9


/** CHALLENGE 4 */
// CHALLENGE 4
function once(func) {
  let output = 0; 
 
  return function(value) {
    if(output > 0) return output;

    output = func(value)
    return output;
  }

}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6



/** CHALLENGE 5 */
function after(count, func) {
  
  return function() {
    count--;
    if(count === 0) {
      return func();
    } else {
      return;
    }
  }

}

// /*** Uncomment these to check your work! ***/
const called = function() { 
  console.log('hello') 
};
const afterCalled = after(3, called);
afterCalled() 
// => nothing is printed
afterCalled() 
// => nothing is printed
afterCalled() 
// => 'hello' is printed


/** CHALLENGE 6 */
function delay(func) {
  return function(wait, ...params) {
    setTimeout(function(){
      return func(...params)
    }, wait)
  }
  
}

const callDelay = delay((number) => console.log(number))
// callDelay(1000, "ok")
// callDelay(2000, "ok 2")
// callDelay(3000, "ok 3")

// another way to implement without closure 
const delay2 = function(cb, wait, ...params) {
    setTimeout(function(){
      cb(...params)
    }, wait)
}

const sayHello = function(name) { console.log(name) }

// delay2(sayHello, 4000, "Carlos")


/** CHALLENGE 7 */
function rollCall(names) {
  let counter = -1;

  return function() {
    if(counter < names.length -1) {
      counter++
      return names[counter];
    } else {
      return "Everyone accounted for"
    }
  }
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
console.log(rollCaller()) 
// => should log 'Victoria'
console.log(rollCaller()) 
// => should log 'Juan'
console.log(rollCaller()) 
// => should log 'Ruth'
console.log(rollCaller()) 
// => should log 'Everyone accounted for'


/** CHALLENGE 8 */
function saveOutput(func, magicWord) {
  let output = {};

  return function(arg) {
    if(arg === magicWord) {
      return output
    }

    return output[arg] = func(arg);
  }
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };

const multBy2AndLog = saveOutput(multiplyBy2, 'boo');

console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


/** CHALLENGE 9 */
function cycleIterator(array) {
  let index = -1

  return function() {
    index
    index === array.length - 1 ? index = 0 : index++;
    index
    return array[index]
  }
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); 
// => should log 'Fri'
console.log(getDay()); 
// => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


/** CHALLENGE 10 */
function defineFirstArg(func, arg) {
  return function(...args) {
    return func(arg, ...args)
  }
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); 
// => should log 15


/** CHALLENGE 11 */
function dateStamp(func) {
  return function(...args) {
    return {
      date: (new Date()).toDateString(), 
      output: func(...args)
    }
  }
}

// other way 
// function dateStamp(func) {
//   const obj = {}
//   let count = 0;

//   return function(...args) {
//     const date = new Date
//     const today = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
    
//     obj[count] = { date: today, output: func(...args) }

//     count++;
//     return obj;
//   }
// }


// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); 
// => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); 
// => should log { date: (today's date), output: 12 }


/** CHALLENGE 12 */
function censor() {
  const pairs = {};
  let text = "";

  return function(str, str2 = null) {
    
    if(!str2) {
    
      for([key, value] of Object.entries(pairs)) {
        text = str.replace(key, value)
      }
      
      return text;
    }

    pairs[str] = str2
  }
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
// => should log 'The slow, brown fox jumps over the lazy cats.'


/** CHALLENGE 13 */

// personal note: it could be achieve only return a object and use this

function createSecretHolder(secret) {
    let private = secret
    
    return {
      secret,
      getSecret() {
          return private
      },
      setSecret(secret) {
          private = secret
      }
    }
}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // => returns 2


/** CHALLENGE 14 */
function callTimes() {
  let counter = 0;

  return function() {
    return counter++
  }
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2


/** CHALLENGE 15 */
function roulette(num) {
  let spins = num;

  return function() {

      spins--
  
      if(spins === 0) {
        return "win"
      } else if (spins < 0) {
        return "pick a number to play again"
      }

      return `spin`
  }
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); 
// => should log 'spin'
console.log(play()); 
// => should log 'spin'
console.log(play()); 
// => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'

/** Challenge 16 */
function average() {
  const numbers = []
  
  return function(n) {
    if(!n) return 0
    
    !numbers.includes(n) && numbers.push(n)

    const sum = numbers.reduce((acc, valor) => acc + valor, 0) 

    return sum / numbers.length
  }  
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8


/** CHALLENGE 17 */
function makeFuncTester(arr) {
    
  return function(cb) {
      for(let i = 0; i < arr.length; i++) {
          if(cb(arr[i][0]) === arr[i][1]) return true
          return false
      }
  }
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


/** CHALLENGE 18 */
function makeHistory(limit) {

  const history = []

  return function(str) {
    
    
    if(str == 'undo') {
        if(history.length > 0) {
          return `${history.pop()} undone`
        } else {
          return "nothing to undo"
        }
    } else {
        if(history.length < limit) {
          history.push(str)
        } else {
          history.shift()
          history.push(str)
        }
    }
    return `${str} done`;
  }
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'


/** CHALLENGE 19 */
function blackjack(array) {
  
  let players = -1;
  let index = 0;

  function dealer(first, second) {
    players++; 

    let sum = 0
    let bust = false;

    function player() {
      

      if(bust) return "you are done!"
    
      if(sum === 0) {
        sum = first + second;
        return sum;
      } 

      if(array[index + players]) {
       
        sum += array[index + players]

        if(sum > 21) {
          bust = true;
          return "bust"
        }

        index++
      }

     

      return sum;
    }

    return player;
  }

  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
