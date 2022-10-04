const prompt = require("readline-sync").question;
let input = "";
const toDos = ["collect chicken eggs", "clean litter box"];
while (input !== "quit" && input !== "q") {
  input = prompt("What the question?");
  if (input === "list") {
    console.log("***********");
    for (let i = 0; i < toDos.length; i++) {
      console.log(`${i} : ${toDos[i]}`);
    }
    console.log("***********");
  } else if (input === "new") {
    const newTodo = prompt("ok, enter a new to do");
    toDos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = prompt("what is the index you would like to delete?");
    toDos.splice(index, 1);
  } else {
    console.log("NOT AN INPUT");
  }
}
console.log("OK QUIT THE APP!");
