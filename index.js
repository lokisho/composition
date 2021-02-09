// Slide_1
// Basic compose function

/*
  Characteristics:
  - The composition of two functions, returns a function.
 */

const compose = (f, g) =>  (x)  => f(g(x));

const toUpperCase = (x) => x.toUpperCase();
const exclaim = (x) => x + '!';

/**
 * Inside to outside function
 */
const no_composed_shout = function(x) {
  return exclaim(toUpperCase(x));
};

console.log('inside to outside function', no_composed_shout("send in the clowns"));
//=> "SEND IN THE CLOWNS!"


/**
 * the g will run before the f, creating a right to left flow of data.
 */
const shout = compose(exclaim, toUpperCase);

console.log('composed function', shout("send in the clowns"));
//=> "SEND IN THE CLOWNS!"

//const reverse_shout = compose(toUpperCase, exclaim);
//console.log('reversed composed function', reverse_shout("send in the clowns"));
//=> "SEND IN THE CLOWNS!"
