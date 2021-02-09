// Slide_5
// PointFree / Currying.

const { compose, join, map, pipe, replace, split } = require('ramda');

const toLowerCase = (x) => x.toLowerCase();
const toUpperCase = (x) => x.toUpperCase();
const head = (x) => x[0];

// Pointfree means functions that never mention the data upon which they operate
// pointful because we mention the data: word
const snakeCase = function(word) {
  return word.toLowerCase().replace(/\s+/ig, '_');
};

// pointfree + currying
const pointfreeSnakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);

console.log('point', snakeCase('to Snake Case'));
console.log('pointFree', pointfreeSnakeCase('to Snake Case'));

// we don't need the data to construct our function in the pointfree version,
// whereas in the pointful one, we must have our `word` available before anything else.
// this help us remove needless names and keep us concise and generic

//not pointfree because we mention the data: name
const initials = (name) => name.split(' ').map(pipe(head, toUpperCase)).join('. ');
// console.log('initials', initials("hunter stockton thompson"));
// 'H. S. T'

//pointfree
const pointfreeInitials = pipe(
    split(' '),
    map(pipe(head, toUpperCase)),
    join('. ')
);

//console.log('initialsPointfree', pointfreeInitials("hunter stockton thompson"));
// 'H. S. T'