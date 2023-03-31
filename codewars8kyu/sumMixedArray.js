/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/
//Solutions:
function sumMix(x){
    //Use the map method on the argument and return  each item with the number method so strings can become an integer and store in a variable
    let num =  x.map(item => Number(item));
    //Use the reduce method on the variable created and add them to get the sum 
    return num.reduce((acc,c) => acc + c, 0)
};