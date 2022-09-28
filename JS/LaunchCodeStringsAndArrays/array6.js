console.log('')
console.log("------------------------------------------------")
console.log("------------------------------ARRAYS PROBLEM 6:")
//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//a) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008]
let element2 = ['helium', 'He', 4.003]
let element26 = ['iron', 'Fe', 55.85]


//b) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let Table = []
Table.push(element1)
Table.push(element2)
Table.push(element26)
console.log(Table)
//c) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(Table[0],Table[1][1])


//d) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(Table[0][2], Table[1][0], Table[2][1])


//e) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let element27 = ['Boron', 'B', 10.811]
Table.push(element27)
console.log(Table)

console.log(Table[0][1],Table[1][1],Table[2][1], Table[3][1])