/*Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8*/
//Solution:
function pipeFix(numbers){
    //Make a a variable for an empty array
    let a = [];
    //Make a for loop
    //Start the loop with the first index of the array 
    //Make the loop keep going until it is not less than or equal to the last index of the array
    //Add one to for loop each time it runs
    for(let i = numbers[0]; i<=numbers[numbers.length - 1];i++){
    //Push the the looping numbers to the array
      a.push(i)
    }
    //Return the array
    return a 
}