const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer= "Sally Ride";
let candidateAnswer ="";
let questions = ["Who was the first American woman in space? ","True or false: 5000 meters = 5 kilometers. ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride","True","40","Trajectory","3"] ;
let candidateAnswers=[];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName = input.question("Enter your name : ");
return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnqswer //
  for(let i=0 ;i<questions.length ;i++)
  {
    candidateAnswers[i] =input.question(questions[i]);
  }
  return candidateAnswers;

}

function gradeQuiz(candidateAnswers,candidateName) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade=0;
  let noOfCorrectAnswers=0;
  console.log(candidateAnswers);
  for (let j=0;j<correctAnswers.length;j++)
  {
    if (candidateAnswers[j].toUpperCase() === correctAnswers[j].toUpperCase())
    {
      noOfCorrectAnswers++;
    }
  }
  grade = (noOfCorrectAnswers) / (questions.length) * 100

console.log(`Candidate Name: ${candidateName}`);

for(let ind=0; ind < questions.length; ind++)
{
  console.log(`${questions[ind]}`);
  console.log(`Your Answer: ${candidateAnswers[ind]}`);
  console.log(`Correct Answer: ${correctAnswers[ind]} \n`);
}



console.log(`>>> Overall Grade: ${grade}% (${noOfCorrectAnswers} of ${questions.length} responses correct) <<<'`);

if (grade>=80)
{
  console.log (">>> Status: PASSED <<<");
}
else
{
  console.log (">>> Status: FAILED <<<");
}


  return grade;
}

function runProgram() {
  
  // TODO 1.1c: Ask for candidate's name //
  this.candidateName=askForName();
  console.log(`Welcome ${this.candidateName}`);

  askQuestion();
  gradeQuiz(this.candidateAnswers,this.candidateName);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};