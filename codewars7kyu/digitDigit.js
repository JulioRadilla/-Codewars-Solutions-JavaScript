/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!*/
//Solution:
function squareDigits(num){
    //get the value and make it as a string with toString method. store in a variable for later use
    let s = num.toString() 
    //Use the variable created on top to split it with the split method and make an array. store in a variable for later use
    let a = s.split('')
    //Use the variable created on top to map throught the array elements and use the math pow method
    //Make each element a number so that it can be use in the math pow method with the power 2 and store it in a variable
    let n = a.map(item => Math.pow(Number(item),2));
    //Use the digits created on top and join them together to created a string again and store in a variable
    let digits =  n.join('');
    //return the variable above as a Number with the number method 
    return  Number(digits)
}