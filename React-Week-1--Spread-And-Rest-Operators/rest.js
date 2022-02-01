// TODO: create the function sumAll
function sumAll(...nums) {
  return nums.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sumAll(1, 2)); // expected output: 3
console.log(sumAll(1, 2, 3)); // expected output: 6
console.log(sumAll(1, 2, 3, 4)); // expected output: 10

//don't change this line
if (typeof module !== "undefined") {
  module.exports = { sumAll };
}
