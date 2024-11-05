// Write a function that uses Math.min() and Math.max() to limit a number within a given range (e.g., between 1 and 10).
function number(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
console.log(number(15, 1, 10)); 
console.log(number(4, 1, 10)); 
console.log(number(-2, 1, 10));

// const numbers = [3, 7, 2, 5];
// // console.log(Math.min(...numbers));  
// console.log(Math.max(...numbers));  
// What result would you get from Math.floor(Math.random() * 5) + 5, and what range does this expression cover?
const range=Math.floor(Math.random() * 5) + 5;
console.log(range);

// const a=5.1
// const b=5.0
// console.log(Math.ceil(a))
// console.log(Math.round(b));
// If you wanted to round a number up to the nearest integer only if it has a fractional part (e.g., 5.1 to 6 but 5.0 remains 5), which function(s) could you use?
function round(num) {
  return num % 1 === 0 ? num : Math.ceil(num);
}
console.log(round(5.1));
console.log(round(5.0)); 


// destructutring:--

// How would you use destructuring to assign the first two elements of an array [10, 20, 30, 40] to variables a and b?
const [a,b]= [10, 20, 30, 40];
console.log(a)
console.log(b)

// Given an object { name: "Alice", age: 25, city: "New York" }, how would you use destructuring to assign name and age to variables?
const person = { name: "Bhavani", age: 21, city: "Rajahmundry" };
const { name, age } = person;
console.log(name);
console.log(age);

// Using nested destructuring, how would you extract the city property from this object: { person: { name: "Eve", address: { city: "Paris" } } }?
const data = { person: { name: "Eve", address: { city: "Paris" } } };
const { person: { address: { city } } } = data;
console.log(city); 



// destructutring:--

// How would you use the spread operator to combine two arrays, [1, 2, 3] and [4, 5, 6], into a single array?
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Given the function function sum(...numbers) {}, explain how the rest operator can be used in this function to calculate the sum of an arbitrary number of arguments.
function sum(...numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sum(1, 2, 3));       
console.log(sum(4, 5, 6, 7, 8)); 


// How can you use the spread operator to clone an object { name: "John", age: 30 } into a new object with an additional city property?
const original = { name: "John", age: 30 };
const clonedWithCity = { ...original, city: "New York" };
console.log(clonedWithCity); 

