/*Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!*/
//Solution:
function oddOrEven(array) {
    //Add the array to get the sum
    let sum = array.reduce( (acc,c) => acc + c, 0);
    //Use math.abs() on sum and check if the number is divisible by 2 and if it is the return even else return odd
   return Math.abs(sum) % 2 == 0 ? 'even' : 'odd'
 }