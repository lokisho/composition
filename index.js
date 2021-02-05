// Slide_7
// Async.

const R = require('ramda');
const _ = require('lodash');

const head = async (x) => x[0];
const reverse = async (x) => x.reduce( (acc, i) => [i].concat(acc), []);
const toUpperCase = async (x) => x.toUpperCase();
const exclaim = async (x)  => x + '!';

const pipe = _.pipeP(reverse, head, toUpperCase, exclaim);
console.log('pipe', pipe(['jumpkick', 'roundhouse', 'uppercut']));
// pipe(['jumpkick', 'roundhouse', 'uppercut']).then(data => console.log(data));
// UPPERCUT!
