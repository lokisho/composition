// Slide_3
// Associative.

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

const toUpperCase = (x) => x.toUpperCase();

// Composition is associative, meaning it doesn't matter how you group two of them.
// The associative property is a math rule that says that the way in which factors are grouped
// in a multiplication/addition problem does not change the product.
// So, should we choose to uppercase the string, we can write:

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

lastUpper = compose_variadic(toUpperCase, head, reverse);
console.log('compose_variadic', lastUpper(['jumpkick', 'roundhouse', 'uppercut']));
// UPPERCUT
