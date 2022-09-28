console.log('')
console.log("------------------------------PART1 OF PROBLEM 3:")
let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
console.log(language.slice(0,1) + language.slice(4,5))


//b) Without using .slice(), use method chaining to accomplish the same thing.

console.log(language.replace("JavaScript", "JS"))

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
let firstInitial = language[0];
let lastInitial = language[4]
console.log(`The abberviation for 'JavaScript' is ${firstInitial + lastInitial}`)

//d) Just for fun, try chaining 3 or more methods together, and then print the result.

/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';