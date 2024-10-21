const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."

=========================================================================================

Plan: 
- Function: A user enters a name and exam score.
- Student's name will be a variable and printed in the console.log.
- If-else statement will be used for the exam score.
- Score is a number variable.
- Questions: "Please enter the student's name:" & "Please enter the student's exam score:"
- Test all inputs
- Go back and re-evaluate if code doesn't work
- Try to Implement challenge code
*/

//determine a proper function name and parameter variable name
function TheFunction(_Name, Score){

  if (Score > 85){
    console.log(`Excellent! ${_Name} has an A.`);
  } else if (Score < 86 && Score > 71){
    console.log(`Great job! ${_Name} has a B.`);
  } else if (Score < 72 && Score > 59){
    console.log(`Good effort! ${_Name} has a C.`);
  } else if (Score < 61 && Score > 49){
    console.log(`Needs improvement. ${_Name} has a D.`);
  } else if (Score < 50){
    console.log(`Fail. ${_Name} has a F.`);
  } 
  //write your code here
  
}

function StartApp(){
  readline.question("Please enter the student's name:", _Name => {
    readline.question("Please enter the student's exam score:", Score => {

      //call your function here.
      TheFunction(_Name, (Number(Score)))
      // readline.close();
      if(Score !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();