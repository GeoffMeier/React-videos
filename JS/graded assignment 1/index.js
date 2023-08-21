const readlineSync = require("readline-sync");
// TODO 2: modify your quiz app to ask 5 questions //

let candidateName = "";

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space?",
  "True or false: 5 kilometer == 5000 meters?	",
  "(5 + 3)/2 * 10 = ?	",
  'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?	',
  "What is the minimum crew size for the ISS?	",
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  candidateName = readlineSync.question("whats your name?\n");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let quest of questions) {
    candidateAnswers.push(readlineSync.question(quest));
  }
  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {
  let numOfCorrectAnswers = 0;

  for (let index in questions) {
    let currentCandidateAnswer = candidateAnswers[Number(index)];
    let currentCorrectAnswer = correctAnswers[Number(index)];
    console.log(`question: ${Number(index) + 1} 

        ${questions[Number(index)]}  
        
        YOUR ANSWER!!
        ${currentCandidateAnswer}
        
        CORRECT ANSWER!!
        ${currentCorrectAnswer}
        
        `);
    if (currentCandidateAnswer === currentCorrectAnswer) {
      numOfCorrectAnswers += 1;
    }
  }
  let percentage = (numOfCorrectAnswers / questions.length) * 100;
  console.log(`>>> Overall Grade: ${percentage}% (${numOfCorrectAnswers} of ${
    questions.length
  } responses correct) <<<
>>> Status: ${percentage >= 80 ? "PASS" : "FAIL"}<<<`);
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  // if (candidateAnswer === correctAnswers)
  // {
  //   `Your response was  ${candidateAnswer} and the correct answer is ${`
  // } else {
  //   console.log('incorrect')
  //     }
  //   let grade;
  //   return grade;
}

function runProgram() {
  askForName();
  console.log(`Hello ${candidateName}`);

  askQuestion();

  gradeQuiz(this.candidateAnswers);

  console.log(candidateAnswer);
}
