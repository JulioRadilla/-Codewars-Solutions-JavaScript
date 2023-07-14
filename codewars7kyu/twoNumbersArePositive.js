/* Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false */
//Solution:
function twoArePositive(a, b, c) {
    //Create a variable to hold your counts of positive
    let count = 0; 
    //Create an array to hold the 3 argumments given
    let arr = [a,b,c];
    //Loop through array with for each method and use the method of Math.sign on the number to check if the number is positive or negative if its positive add 1 to the count if not just dont add anything
    arr.forEach(item => Math.sign(item) === 1 ? count++ : count)
    //Check if the count == 2 if it is return true else return false
    return count == 2 ? true : false;
}