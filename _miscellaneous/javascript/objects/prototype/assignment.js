const o = {};

Object.defineProperty(o, 'x', { value: 'old' });

Object.defineProperty(o, 'y', {
  get: function () {
    return 'old';
  },
  set: function (value) {
    console.log(`Setter called with the value: ${value}`);
  },
});

const a = Object.create(o);
a.x = 'new';
console.log(`a.x: ${a.x}`);

a.y = 'new';
console.log(`a.y: ${a.y}`);

console.log(a);
