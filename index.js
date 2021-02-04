// Slide_2
// Order Matters.

/*
  Characteristics:
  - The composition of two functions, returns a function.
 */

const compose = (f, g) => {
  return function(x) {
    return f(g(x));
  };
};

const head = (x) => {
  return x[0];
};

const reverse = (x) => x.reduce( (acc, i) => {
  return [i].concat(acc);
}, []);

const last = compose(head, reverse);
console.log(last(['jumpkick', 'roundhouse', 'uppercut']));
//=> 'uppercut'

const reverse_last = compose(reverse, head);
// console.log(reverse_last(['jumpkick', 'roundhouse', 'uppercut']));
