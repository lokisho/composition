// Slide_6
// Debugging.

const { compose, join, map,  replace, split, tap, toLower } = require('ramda');

const trace = (tag) => (x) => {
    console.log(tag, x);
    return x;
};
// const trace = curry(function(tag, x) {
//   console.log(tag, x);
//   return x;
// });
let desherize;
dasherize = compose(join('-'), toLower, split(' '), replace(/\s{2,}/ig, ' '));

// uncomment to trace.
// dasherize = compose(join('-'), toLower, trace('after split'), split(' '), replace(/\s{2,}/ig, ' '));
// after split [ 'The', 'world', 'is', 'a', 'vampire' ]
// dasherize = compose(join('-'), toLower, tap(console.log), split(' '), replace(/\s{2,}/ig, ' '));
// dasherize = compose(join('-'), toLower, tap((data) => console.log('data', data)), split(' '), replace(/\s{2,}/ig, ' '));
// [ 'The', 'world', 'is', 'a', 'vampire' ]

console.log(dasherize('The world is a vampire'));
