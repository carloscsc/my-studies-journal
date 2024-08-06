// using Quokka to console

// evaluating
let original = "text";
let copy = original;
copy; //?

original = "new text";
copy; //?

// Obs, the same thing is different in array indexes
const operands = [4, 5];
operands[0] = 6;
operands; //?
sum = operands[0] + operands[1]; //?

// and we use evaluating they always update the referenced array
let array1 = [0, 1, 2];
let array2 = array1;
array2; //?
array1.push(3);
array2; //?
