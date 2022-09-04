// 1-vazifa 
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function modul(num) {
  if (num == 0) {
    return num
  }
  else if (num > 0) {
    return -num
  }
  else {
    return Math.abs(num)
  }
}

modul();

console.log(modul(11));


// 2-vazifa
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


arrSeeps = [];
function sheeps(amount) {
  for (let i = amount; i > 0; i--) {
    arrSeeps.push(i + " sheep...")
  }
  return arrSeeps.reverse().join(", ")
}

sheeps()
console.log(sheeps(4));

// 3-vazifa 
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 122, -11, -12, -13, -14, -15];
let sum = 0;
let newArr = [];
arr.filter(item => {
  if (item > 0) {
    return newArr.push(item)
  } else {
    return sum += item
  }
});

let arrResult = [newArr.length, sum];

console.log(arrResult);
