const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*

Planning:
I will use the same format from class_exercises1.js to structure the code:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

This assignment asks for 2 variables (answer & guess)
I will use one function for each: 
function GuessingGame(Number(answer)); & function GuessingGame(Number(guess));
If - else statements will be used for the number guesses above and below the answer.

==========================================================================================

You are making a number guessing game.
The function will take in an answer and a guess.
If the guess is bigger than the answer, you will say "Too Big!"
If the guess is smaller than the answer, you will say "Too Small!"
If the guess is the answer, you will say "You win!"

BONUS
if the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
EG answer is 15, and the user guesses between 5-25 like 22 -> "Too Big!" "Close!"

if the guess is within a range of 5, instead of "Close!", it will say "Almost there!"

BONUS 2x DIFFICULTY
set the number of guesses allowed to a variable outside of the function
set the number of guesses made to a variable outside of the function starting it at 0
everytime the function runs add 1 to the number of guesses made

add one more if statement under the 2nd readline question
if(numberOfGuessesMade >= numberOfGuessesAllowed){
  console.log("You lose!");
  readline.close();
}

This means you can close the game with both "quit" and losing
*/

//determine a proper parameter variable name
function GuessingGame(answer, guess) {

  // const answer = Number(answer);
  // const guess = Number(guess);
  // let guess1 = "Too Big!" 
  // let guess2 = "Too Small!" Daniel: these work but it may be better to just use console.log() for the messages. Less variables, less confusing

  if (guess < answer){
    console.log("Nope! Too Small!");
} else if (guess > answer){
    console.log("Nope! Too Big!");
} else if (guess === answer){
    console.log("You Win!");            
}
}


//determine a proper question to ask and the proper variable name for the answer
readline.question("Welcome to the Number Guessing Game! Please type the number you want as the answer:", (answer) => {
  // GuessingGame(Number(answer)); Daniel: this is not nessecary

  //make an infinite recall for guessing question
  function StartGame() {

    //determine a proper question to ask and the proper variable name for the user to guess
    readline.question("Guess the number that the last person typed:", (guess) => {
      GuessingGame(answer, guess); //Daniel: You need to call the function with (answer, guess), both variables are needed to run the if else if loop
      
      //call your function here
      if (guess === "quit") {
        readline.close();

      //Daniel: Add else if statement here for when the guess is correct, and the game ends.
      } else if (guess === answer){
        readline.close();
      } else {
      StartGame();
      }

    });
  }

  StartGame();
});

//Feedback by: Daniel