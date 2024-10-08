const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

//determine a proper parameter variable name
function CheckDrinkingAge(age){

	let age1 = `minor`;
	let age2 = `adult`;

	if (age < 13){
		console.log(`You are a ${age1}. Please leave.`);
  } else if (age > 13 && age < 19){
		console.log(`You are still a ${age1}. Grow up to 19. Please leave.`);
  } else if (age > 19 && age < 50){
		console.log(`You are an ${age2}. Drink Away!`);
  } else if (age > 50 && age < 70){
		console.log(`You are an ${age2}, but be careful of your health.`);
  } else if (age > 70){
		console.log(`You are an ${age2}, but be careful of your health and your life.`);
}
}

//determine a proper question to ask and the proper variable name for user input
// function BarEntrance(){
readline.question(`To enter the bar you must be over 19. Please enter your age.`, age => {
  CheckDrinkingAge(Number(age));

// if (age !== `exit`){
//   BarEntrance();
// } else {
  //call your function here
  readline.close();

});
// BarEntrance();

// Comment from Daniel. Good job, just needed to remove the extra function BarEntrance()
