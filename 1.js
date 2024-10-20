const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding driving privileges.

- If the person is under 16, they should be told "too young to drive".
- If they are between 16 and 17, they should be told "can drive with supervision".
- If they are between 18 and 70, they should be told "can drive freely".
- If they are over 70, they should be advised to "consider a driving assessment".
*/

//determine a proper parameter variable name
function CheckDrivingAge(age){

if (age < 16){
  console.log("You are too young to drive.");
} else if (16 < age < 18){
  console.log("You can drive with supervision.");
} else if (18 < age < 70){
  console.log("You can drive safely.");
} else if (age > 70){
  console.log("You should consider a driving assessment.");
  }
}

function StartApp(){
  readline.question('Please tell me your age to determine your driving privileges:', (age) => {
      CheckDrivingAge(Number(age));
    //call your function here.
    
    // readline.close();
    if(age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();