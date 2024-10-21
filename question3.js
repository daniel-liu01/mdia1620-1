const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

===============================================================================

Plan: 
- Function: Student's name, lunch money amount, lunch item name and the lunch item cost are inputted.
- If-else statement used for lunch money amount and cost of lunch.
- Amount and cost are number variables.
- Questions: 
  - "Please enter your name:"
  - "Please enter your lunch money balance:"
  - "Please enter your order:"
  - "Please enter the cost of your order:"
- Test all inputs
- Go back and re-evaluate if code doesn't work
- Try to Implement challenge codes
  */

//determine a proper function name and parameter variable name
function TheFunction(Name, amount, order, cost){

  let balance = amount - cost;
  let remaining = cost - amount;

    if (amount > cost && balance <= 5){
    console.log(`${Name} purchased ${order} purchased! Remaining Balance: ${balance} Warning: Low Balance!`);
  } else if (amount > cost && balance === 0){
    console.log(`${Name} purchased ${order} purchased! Remaining Balance: ${balance} Balance Depleted. Please add more funds.`);
  } else if (amount > cost){
    console.log(`${Name} purchased ${order} purchased! Remaining Balance: ${balance}`);
  } else if (amount < cost){
    console.log(`${Name} does not have sufficient funds to pay for ${order}! Needs ${remaining} more.`);
  } 
  
  //write your code here
}

function StartApp(){
  readline.question("Please enter your name:", Name => {
    readline.question("Please enter your lunch money balance:", amount => {
      readline.question("Please enter your order:", order => {
        readline.question("Please enter the cost of your order:", cost => {
          TheFunction(Name, (Number(amount)), order, (Number(cost)))
          //call your function here.

          // readline.close();
          if(cost !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();