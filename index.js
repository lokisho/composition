// Slide_1
// Basic compose function

/*
  Characteristics:
  - The composition of two functions, returns a function.
 */

const compose = function(f, g) {
  return function(x) {
    return f(g(x));
  };
};

const toUpperCase = function(x) {
  return x.toUpperCase();
};
const exclaim = function(x) {
  return x + '!';
};

/**
 * the g will run before the f, creating a right to left flow of data.
 */
const shout = compose(exclaim, toUpperCase);

/**
 * Inside to outside function
 */
const no_composed_shout = function(x) {
  return exclaim(toUpperCase(x));
};

console.log(shout("send in the clowns"));
//=> "SEND IN THE CLOWNS!"