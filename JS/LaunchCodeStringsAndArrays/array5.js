let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];
console.log('')
console.log("------------------------------------------------")
console.log("------------------------------ARRAYS PROBLEM 5:")
//a) Use the split method on the string to identify the purpose of the parameter inside the ().

 console.log(str.split());
// console.log(str.split('e'));
// console.log(str.split(' '));
 // console.log(str.split(''));



//b) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join())

//c) Do split or join change the original string/array?
console.log(str.split(',').sort().join(','));

//No, console.log(str) will stay the same

//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));