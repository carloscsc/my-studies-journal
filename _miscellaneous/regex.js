// test() - return a boolean
console.log(/\a/.test("a")); // match exactly [a]
console.log(/[a]/.test("ba")); // need contain [a]
console.log(/[a]/i.test("bA")); // case insensitive [a or A]
console.log(/a[0-9]/.test("bbbbba1012a")); // match one or more [a0-1 in any position]

console.log(/a[0-9]$/.test("a1012a")); // restrict to last [a0-9]
console.log(/a[0-9]+$/.test("a1")); // restrict - end [a+one or more numbers]

console.log(/^a[0-9]/.test("a1a1")); // restrict the first [a0-9]
console.log(/^[0-9]+a/.test("111111a")); // restrict - start [a+one or more numbers]

console.log(/^a[0-9]+a$/g.test("a1012121212a")); // restrict from start to end [a+one or more numbers+a]
console.log(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test("560.696.270-59")); // CPF

// replace() - return a new string
console.log("ba bb bb a".replace(/[a]/, "A")); // Replaces the first occurrence of ['a' with 'A']
console.log("ba bb bb a".replace(/[a]/g, "A")); // Replaces all occurrences
console.log("c123c123".replace(/[0-9]$/, "0"));
console.log("c123c123".replace(/\d$/, "0"));

// match() - return a array
console.log("abc123abc123".match(/\d/g));
