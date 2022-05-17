// Write three different arrow functions in the form of square, cube, exponent
// Define these functions by taking the necessary parameters from the main program.
// Returns it to the main program.

const square = (x) => x ** 2;
const cubing = (x) => x ** 3;
const exponent = (x, y) => x ** y;

console.log(`3 squared = `, square(3));
console.log(`4 cubing  = ${cubing(4)}`);
console.log(`5 exponent 4 = ${exponent(5, 4)}`);
