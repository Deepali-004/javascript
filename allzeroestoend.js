const { count } = require("node:console");
const { reverse } = require("node:dns");

//move all zeroes in array to end
let arr1 = [2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 7, 1, 10];
function allzeroestoend() {
  let result1 = [];
  let result2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      result1.push(arr[i]);
    }
    if (arr[i] == 0) {
      result2.push(0);
    }
  }
  let result = result1.concat(result2);
  console.log(result);
}
// allzeroestoend();
// let string = "lol";
function reversestring() {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
  }
  return result;
  //   return string.split("").reverse().join("");
}
// console.log(reversestring());
function palindrome() {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
  }
  if (result === string) {
    return true;
  } else {
    return false;
  }
}
// console.log(palindrome());
function largest() {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(largest());
let string = "Hello";
function occurences(char) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    if (char == string[i]) {
      result++;
    }
  }
  return result;
}
// console.log(occurences("l"));
function intersection() {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}
// console.log(intersection());
function union() {
  let result = arr1.concat(arr2);
  let final = [];
  for (let i = 0; i < result.length; i++) {
    if (!final.includes(result[i])) {
      final.push(result[i]);
    }
  }
  final.sort((a, b) => a - b);
  console.log(final);
}
// union();
//string is hello
let string2 = "Hello World nckjndkcnkjdnkcjn";
function contains(substring) {
  console.log(string2.toLowerCase().includes(substring.toLowerCase()));
}
// contains("llo W");
function firstnonRepeated() {
  let result = [];
  let final = {};
  for (let i = 0; i < string2.length; i++) {
    if (!final[string2[i]]) {
      final[string2[i]] = 0;
    }
    final[string2[i]]++;
  }
  let count = 0;
  for (let key in final) {
    if (final[key] == 1) {
      result.push(key);
    }
  }
  return result[1];
}
// console.log(firstnonRepeated());
function capitalize() {
  let array = string2.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
  let result = array.join(" ");
  return result;
}
console.log(capitalize());
