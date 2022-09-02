(a, b) => a + b + 100;

const a = 4;
const b = 2;

// An empty arrow function returns undefined
const empty = () => {};

(() => 'foobar')();
console.log(empty);
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => a > 15 ? 15 : a;
console.log(simple(16));
console.log(simple(10));


const max = (a, b) => a > b ? a : b;
console.log(max(23,56));

// Easy array filtering, mapping, etc.

const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
console.log(sum);

const even = arr.filter((v) => v % 2 === 0);
console.log(even);

const double = arr.map((v) => v * 2);
console.log(double);
