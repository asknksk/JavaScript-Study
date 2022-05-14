// QUESTION
// Taking the base and height values as parameters and creating a triangle
// Write a function that calculates the area and returns it to the main program.
const base = prompt("Please enter base value: ");
const height = prompt("Please enter height value : ");

const triangleArea = (x, y) => (x * y) / 2;

console.log(triangleArea(base, height));
