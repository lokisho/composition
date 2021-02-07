// Slide_3
// Associative.

const compose = (f, g) => {
  return function(x) {
    return f(g(x));
  };
};

const head = (x) => x[0];

const reverse = (x) => x.reduce( (acc, i) => {
  return [i].concat(acc);
}, []);

const toUpperCase = (x) => x.toUpperCase();

const exclaim = (x)  => x + '!';

// Composition is associative, meaning it doesn't matter how you group two of them.
// The associative property is a math rule that says that the way in which factors are grouped
// in a multiplication/addition problem does not change the product.

const lastUpper_1 = compose(toUpperCase, compose(head, reverse));
console.log('compose_1', lastUpper_1(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT
const lastUpper_2 = compose (compose(toUpperCase, head), reverse);
console.log('compose_2', lastUpper_2(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT

// Since it doesn't matter how we group our calls to compose, the result will be the same.
// That allows us to write a variadic compose
//  we can give compose as many fn's as we like and let it decide how to group them.
const compose_variadic = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const lastUpper = compose_variadic(toUpperCase, head, reverse);
//console.log('compose_variadic', lastUpper(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT

// One pleasant benefit of associativity is that any group of functions can be extracted and bundled together
// in their very own composition.  Here we start playing with our lego.
let loudLastUpper = compose_variadic(exclaim, toUpperCase, head, reverse);
//console.log('lego_1', loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT!

// or
let last = compose(head, reverse);
loudLastUpper = compose_variadic(exclaim, toUpperCase, last);
//console.log('lego_2', loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT!

// or
last = compose(head, reverse);
let angry = compose(exclaim, toUpperCase);
loudLastUpper = compose(angry, last);
//console.log('lego_2', loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT!
