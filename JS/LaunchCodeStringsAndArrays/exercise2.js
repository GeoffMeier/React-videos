console.log('')
console.log("------------------------------PART1 OF PROBLEM 2:")
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log(dna)

//a) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
dna = dna.trim();
console.log(dna);

//b) Change all of the letters in the dna string to UPPERCASE, then print the result.
dna = dna.toUpperCase();
console.log(dna);

//c) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
console.log(dna);
console.log('');
console.log("------------------------------PART2 OF PROBLEM 2:");
 dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAt-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.

console.log(dna.replace ('GCT' , 'AGG'))

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (dna.indexOf('CAT') ){ 
  console.log("CAT gene found")
} else {
  console.log("CAT gene not found");
}
//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dna.slice(16,19));

//d) Use a template literal to print, "The DNA strand is ___ characters long."
dna = 3
console.log(`The DNA strand is ${dna} characters long.`)

//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
// dna = "hey there what is up";
// let tempArr = dna.split('');
// tempArr.forEach(letter => {
//   console.log(letter);
// })
// let tempObj = {
//   name: 'Geoffrey Meier',
//   school: 'Mizzou',
//   brothers: ['Gavin', 'Alex']
// };
// console.log(tempObj);