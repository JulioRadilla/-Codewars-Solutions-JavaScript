/*If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.*/
//Solution: 
const checkAlive = (health) => health > 0;
//use arrow function and return the statement 
//if the  health is more than 0 then display true if that statement isnt true then it will display false
//return  health > 0 because it is the same as if health > 0 ? true : false;