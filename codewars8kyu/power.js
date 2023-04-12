/*The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled. */
//Solution:
function numberToPower(number, power){
    //Make a variable to hold the total and start with 1 since you are multiplying 
    let total = 1;
    //Use a for loop and start at 1 , if i is less than or equal to power to keep going until it is not and add 1 each time so it can loop
    for(let i = 1; i<=power; i++){
    //Multiply the number given as argument with the total
      total = number * total
    }
    //return the total
    return total
}