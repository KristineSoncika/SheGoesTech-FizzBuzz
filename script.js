let enteredNum = parseInt(
  prompt("How many FizzBuzz numbers do you want to see?")
);
let fizzBuzzNums = [];
for (let i = 15; i <= 15 * enteredNum; i += 15) {
  fizzBuzzNums.push(i);
  console.log(fizzBuzzNums);
}

document.getElementById(
  "fizzBuzz"
).innerHTML = `These are the first ${enteredNum} FizzBuzz numbers: ${fizzBuzzNums.join(
  ", "
)}`;
