// functions that execute on getting and setting

let obj = {
  get propName() {
    // getter
  },

  set propName(value) {
    // setter
  },
};

let user = {
  _name: 'Carlos',
  _surname: 'S. Cantanzaro',

  get name() {
    return `${this._name} ${this._surname}`;
  },

  set name(value) {
    [this._name, ...surname] = value.split(' ');
    this._surname = surname.join(' ');
  },
};

console.log(user.name);

user.name = 'Carlos Sabo Cantanzaro';
console.log(user.name);

/** Accessor Descriptors */

let admin = {
  name: 'john',
  surname: 'Smith',
};

console.log(admin.name, admin.surname);

Object.defineProperty(admin, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, ...surname] = value.split(' ');
    this.surname = surname.join(' ');
  },
  enumerable: false, // false for default
  configurable: true,
});

console.log(admin.fullName);
admin.fullName = 'John Smith Silva da Souza';
console.log(admin.fullName);

for (let key in admin) {
  console.log(key);
}
