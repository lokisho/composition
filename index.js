// Slide_3
// Associative.

const _ = require('lodash');
const R = require('ramda');

const head = (x) => {
  return x[0];
};

const reverse = (x) => x.reduce( (acc, i) => {
  return [i].concat(acc);
}, []);

const toUpperCase = (x) => x.toUpperCase();

const exclaim = (x)  => x + '!';

// For lodash we have flow & flowRight.

const flowRight = _.flowRight(exclaim, toUpperCase, head, reverse);
console.log('flowRight', flowRight(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT!

const flow = _.flow(reverse, head, toUpperCase, exclaim);
console.log('flow', flow(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT!

// For ramda we have compose & pipe

const compose = R.compose(exclaim, toUpperCase, head, reverse);
console.log('compose', compose(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT!

const pipe = R.pipe(reverse, head, toUpperCase, exclaim);
console.log('pipe', pipe(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT!
