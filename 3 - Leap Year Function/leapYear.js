// Leap Year Function

let leapYear = function (year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return `This ${year} is a Leap Year`;
  } else {
    return `Entered ${year} isn't a Leap Year`;
  }
};
const isLeap = prompt("Enter year for check to leap year.");
console.log(leapYear(isLeap));
