const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*
  Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.
  
  - If the user's input matches the password exactly, display "Access Granted!"
  - If the user's input does not match, display "Access Denied!"
  - If the user's input is "forgot", display "Here is a hint"
  - If the user's input is "reset", display "Let's reset your account"
  
  CHALLENGE (SAVE FOR LATER)
  - if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
  - the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"

  =====================================================================================

  Plan: 
  - Function: User enters a password and a then function asks for the password again and checks if it's correct.
  - User's first input will be the correct password, 2nd input is checked. 
  - If-else statement will be used for checking password.
  - Questions: "Please enter a new password:", "Please enter the correct password:"
  - Test all inputs
  - Go back and re-evaluate if code doesn't work
  - Try to Implement challenge code 
  */
  
  
  //determine a proper function name and parameter variable name
  function TheFunction(PasswordCorrect, PasswordGuess){
    //write your code here

    if (PasswordGuess === PasswordCorrect){
        console.log("Access Granted!");
    } else if (PasswordGuess !== PasswordCorrect && PasswordGuess !== "forgot" && PasswordGuess !== "reset"){
        console.log("Access Denied");
    } else if(PasswordGuess === "forgot"){
        console.log("Here's a Hint");
    } else if (PasswordGuess === "reset"){
        console.log("Let's reset your account");
    } 
  }
  
  //CHALLENGE FUNCTION
  
  
  function StartApp(){
    readline.question('Please enter a new password:', PasswordCorrect => {
      readline.question('Please enter the correct password:', PasswordGuess => {
  
        //call your function here.
        TheFunction(PasswordCorrect, PasswordGuess)
        // readline.close();
        if(PasswordGuess !== "quit"){
          StartApp();
        } else {
          readline.close();
        }  
      });
    });
  }
  
  StartApp();