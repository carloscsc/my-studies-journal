function execRecursively(fn, subject, _refs = new WeakSet()) {
	// avoid infinite recursion

	if (_refs.has(subject)) {
		return;
	}

	fn(subject);

	if (typeof subject === 'object' && subject) {
		_refs.add(subject);

		for (const key in subject) {
			execRecursively(fn, subject[key], _refs);
		}
		_refs.delete(subject);
	}
}

const foo = {
	foo: 'Foo',
	bar: {
		bar: 'Bar',
	},
};

foo.bar.foo = foo;
execRecursively((obj) => console.log(obj), foo);

// Create a WeakSet
// _ref = new WeakSet();

// Add an object to the WeakSet
// _ref.add(object);

// verify if an object is in the WeakSet
// _ref.has(object);

// delete an object from the WeakSet
// _ref.delete(object);

// WeakSet is useful for storing objects that you don't want to keep
// in memory, but you want to keep track of them.
// WeakSet is not iterable, so you can't loop over it.

// Examples of WeakSet
// const _ref = new WeakSet();
// const obj = { name: 'John' };
// _ref.add(obj);
// console.log(_ref.has(obj)); // true
// _ref.delete(obj);
// console.log(_ref.has(obj)); // false
