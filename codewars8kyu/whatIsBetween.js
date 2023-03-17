/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]*/
//Solution:
function between(a, b) {
    //make a variable that holds an array 
    let result = [];
    //Make a for loop and start with the number given for the first input, make a condition for when i<=b to keep going until the i is equal to the input given  and add 1 every time it loops 
    for(let i = a; i<=b;i++){
        //use the push method on the array created above and push the i numbers 
       result.push(i);
  }
  //return the variable that was holding the array to get the result 
    return result 
}