// This is an interview question asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function checkSum(num, k) {
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[i] + num[j] == k && i !== j) {
        return true;
      }
    }
  }
  return false;
}
let num = [10, 15, 3, 7];
let k = 18;
console.log(checkSum(num, k));
